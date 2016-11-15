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

gulp.task('lint', function() {
  return gulp.src(watch + '.js')
  // Lint with ESLint
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('minify-styles', function() {
  return gulp.src(mainSass)
  .pipe(sourcemaps.init())
  // Pipe Sass Processor
  .pipe(sass({
    outputStyle: 'compressed',
    importer: moduleImporter()
  }).on('error', sass.logError))

  // Pipe CSS Autoprefixer
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(sourcemaps.write())
  // Pipe Output
  .pipe(gulp.dest(dest));
});

gulp.task('webpack', function() {
  return gulp.src(mainJs)
    .pipe(webpack(require(webpackFile)))
    .pipe(gulp.dest(dest));
});

gulp.task('browser-sync', function() {
  liteServer.defaults.files = [ dest + '*.*'];
  liteServer.server();
});

gulp.task('frontend:watch', function() {
  gulp.watch(watch, ['minify-styles', 'lint', 'webpack']);
});

gulp.task('frontend:build', ['minify-styles', 'webpack']);

gulp.task('backend:build', ['doc']);

gulp.task('build', ['frontend:build', 'backend:build']);

gulp.task('default', ['build']);
