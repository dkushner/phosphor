var gulp = require('gulp')
  , traceur = require('gulp-traceur');

gulp.task('default', function() {
  return gulp.src('lib/**/*.js')
    .pipe(traceur({ sourceMap: true }))
    .pipe(gulp.dest('build'));
});
