const webpack = require('./webpack.config')
webpack.entry = undefined
webpack.output = undefined

module.exports = config => {
  config.set({
    basePath: './',
    frameworks: ['mocha'],
    reporters: ['progress', 'coverage'],
    files: [
      'src/index.js',
      'src/**/*spec.js'
    ],
    preprocessors: {
      'src/index.js': ['webpack', 'sourcemap'],
      'src/**/*spec.js': ['webpack', 'sourcemap']
    },
    webpack,
    coverageReporter: {
      type : 'html',
      dir : 'coverage/frontend/'
    },
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    browsers: ['Chrome']
  })
}
