const gulp = require('gulp');
const mocha = require('gulp-mocha');
const apidoc = require('gulp-api-doc');
const istanbul = require('gulp-istanbul');

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
    dir: './coverage',
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

gulp.task('build', ['doc']);
