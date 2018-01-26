module.exports = function(wallaby) {
  return {
    files: ["tsconfig.json", "package.json", "src/**/*.ts*", "src/**/*.snap", "!src/**/*.test.ts*"],
    tests: ["src/**/*.test.ts*"],
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript({ module: "umd" })
    },
    env: {
      type: "node",
      runner: "node"
    },
    testFramework: "jest"
  }
}
