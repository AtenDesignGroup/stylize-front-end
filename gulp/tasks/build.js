// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');
var build = require('static-react-router/build');
var options = require('../../app/scripts/data'); // Custom app config
var frontEnd = require('../../index.js');
var patterns = require('../../test/data/patterns');
var categories = require('../../test/data/categories');

gulp.task('build-static', function (callback) {
  // build(options); // Writes static HTML to destination;
  frontEnd.build({
    patterns: patterns,
    categories: categories
  });
  callback();
});

gulp.task('build', function (callback) {
  runSequence(['react', 'copyExtra', 'sass', 'svg'],['browserify'], callback);
});
