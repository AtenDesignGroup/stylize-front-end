// npm dependencies
var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');
var gulp = require('gulp');
var gulpfile = require('../Gulpfile');
var mkdirp = require('mkdirp');
var path = require('path');
var staticBuild = require('static-react-router/build');
var util = require('util');

// Local dependencies.
var stylizeData = require('./stylizeData');

// React App dependencies.
var routes = {
  Root: require('../app/scripts/components/Root'),
  Index: require('../app/scripts/components/Index'),
  Category: require('../app/scripts/components/Category')
}

module.exports = function(options, callback) {
  console.log(chalk.green('Building Front-end'));

  var options = stylizeData(options);
  var compiledFolder = path.join(options.dest, 'compiled');

  // Create the compiled directory.
  mkdirp.sync(compiledFolder, function (err) {
    if (err) console.error(err)
  });

  // Write options to disk so they can be bundled into the client-side app
  // with browserify.
  try {
    fs.writeFileSync(
      path.join(compiledFolder, 'options.js'),
      'module.exports = ' + util.inspect(options, {depth: null}),
      'utf-8'
    );
  }
  catch(err) {
    console.log(err);
  }

  // Run Gulp tasks.
  if (gulp.tasks.watch) {
    gulp.start('watch');
  }

  // Prepare routes
  options.routes = _.map(options.routes, function(route) {
    // Replace reference with the actual react component.
    route.handler = routes[route.handler];
    return route;
  });
  options.props.routes = options.routes;

  // Build the static front-end
  staticBuild(options); // Writes static HTML to destination;

  // Run the optional callback
  typeof callback === 'function' && callback();
};
