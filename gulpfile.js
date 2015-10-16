var gulp = require('gulp'),
  postcss = require('gulp-postcss');

var rc = require('./.stylelintrc.json');

gulp.task('css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(postcss([
      require('autoprefixer')(),
      require('stylelint')(rc),
      require('postcss-reporter')({
        clearMessages: true
      })//,
      //require('cssnano')()
    ]))
    .pipe(gulp.dest('./dist/css'));
});
