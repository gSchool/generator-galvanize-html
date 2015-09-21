var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect')

// configure connect task
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});


// configure jshint task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['css/*.css'], ['css']);
});

// default task!
gulp.task('default', ['watch', 'connect']);
