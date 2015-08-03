// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');
var build = require('static-react-router/build');
var options = require('../../app/scripts/data'); // Custom app config

gulp.task('build-static', function (callback) {
  build(options); // Writes static HTML to destination;
  callback();
});

gulp.task('build', function (callback) {
  runSequence(['clean'],['react', 'copyExtra', 'sass'],['browserify'],['build-static'], callback);
});
