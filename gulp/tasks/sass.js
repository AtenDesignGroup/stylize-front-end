var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');
 
gulp.task('sass', function () {
  gulp.src(config.sass.sources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(config.sass.sources, ['sass']);
});