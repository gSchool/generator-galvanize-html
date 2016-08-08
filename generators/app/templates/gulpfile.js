// *** dependencies *** //

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('connect', function () {
  connect.server({
    root: './src/',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./src/css/*.css')
    .pipe(connect.reload());
});

gulp.task('javascript', function () {
  gulp.src('./src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint({
      esnext: true
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('style', function() {
  return gulp.src('src/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['jshint', 'javascript', 'style']);
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/css/*.css'], ['css']);
});

// *** defailt task *** //
gulp.task('default', function() {
  runSequence(
    ['jshint'],
    ['style'],
    ['watch'],
    ['connect']
  );
});
