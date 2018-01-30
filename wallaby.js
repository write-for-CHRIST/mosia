module.exports = function(wallaby) {
  return {
    files: ['tsconfig.json', 'package.json', 'src/**/*.ts*', 'src/**/*.snap', '!src/**/*.test.ts*'],
    tests: ['src/**/*.test.ts*'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'es2015' })
    },
    preprocessors: {
      '**/*.js': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          plugins: ['transform-es2015-modules-commonjs']
        })
    },
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest'
  }
}
