const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const moduleImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');
const liteServer = require('lite-server');
const mocha = require('gulp-mocha');
const apidoc = require('gulp-api-doc');
const istanbul = require('gulp-istanbul');

// Define Variables
const dest = 'dist/';
const watch = 'src/**/*';
const mainSass = 'src/*.scss';
const mainJs = 'src/index.js';
const webpackFile = './webpack.config.js';

gulp.task('pre-test', () => {
  return gulp.src(['modules/!(*.spec)+(.js)' ,'modules/**/!(*.spec)+(.js)'])
  // Covering files
    .pipe(istanbul({
      includeUntested: true
    }))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp.src(['modules/*.spec.js', 'modules/**/*.spec.js'])
  .pipe(mocha())
  .pipe(istanbul.writeReports({
    dir: './coverage/backend',
    reporters: ['html', 'json']
  }));
});

gulp.task('doc', () => {
  return gulp.src('server/')
    .pipe(apidoc({
      debug: false,
      silent: true
    }))
    .pipe(gulp.dest('doc'));
});


gulp.task('default', ['doc']);
