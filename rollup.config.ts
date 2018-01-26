import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import camelCase from "lodash.camelcase"
import typescript from "rollup-plugin-typescript2"
import builtins from "rollup-plugin-node-builtins"
import globals from "rollup-plugin-node-globals"

const pkg = require("./package.json")

const libraryName = "mosia"

export default [
  {
    input: `src/${libraryName}.ts`,
    output: [
      { file: pkg.main, name: camelCase(libraryName), format: "umd" },
      { file: pkg.module, format: "es" }
    ],
    banner: "#!/usr/bin/env node",
    sourcemap: true,
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: ["commander"],
    watch: {
      include: "src/**"
    },
    plugins: [
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      // Compile TypeScript files
      typescript(),
      globals(),
      builtins(),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs({
        include: [],
        namedExports: {}
      }),
      // Resolve source maps to the original source
      sourceMaps()
    ]
  }
]
