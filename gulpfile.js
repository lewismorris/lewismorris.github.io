const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('styles', function() {
  return gulp.src(['./sass/**/*.scss'])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['./sass/*.scss'], ['styles']);
});

gulp.task('build', ['styles']);
gulp.task('default', ['build', 'connect', 'watch']);
