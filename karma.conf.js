module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha', 'progress', 'coverage'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.js',
      'src/**/*spec.js'
    ],
    preprocessors: {
      'src/index.js': ['webpack', 'sourcemap'],
      'src/**/*spec.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.test.config.js'),
    coverageReporter: {
      type : 'html',
      dir : 'coverage/frontend/'
    },
    mochaReporter: {
      showDiff: true,
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed',
      }
    },
    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },
    browsers: ['Chrome']
  });
};
