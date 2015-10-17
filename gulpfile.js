var gulp = require('gulp'),
  postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(postcss([
      require('autoprefixer')(),
      require('stylelint')(),
      require('postcss-reporter')({
        clearMessages: true
      })//,
      //require('cssnano')()
    ]))
    .pipe(gulp.dest('./dist/css'));
});
