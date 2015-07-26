var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

console.log('config', config);
 
gulp.task('sass', function () {
  gulp.src(config.sass.sources)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(config.sass.sources, ['sass']);
});