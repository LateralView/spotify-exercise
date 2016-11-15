module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    reporters: ['progress', 'coverage'],
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
    browsers: ['Chrome']
  });
};
