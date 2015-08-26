/**
  options
  {
    destination: 'path/to/destination/directory',
    patterns: [
      {
        id: "colors",
        name: "Colors",
        category: "base",
        weight: 0,
        description: "These are the colors in use.",
        path: "These are the colors in use."
      },
      ...
    ],
    categories: [
      {
        id: "components/blocks",
        name: "Blocks",
        weight: 0,
        parentId: "components"
      },
      ...
    ]
  }
*/
var fs = require('fs');
var gulp = require('gulp');
var gulpfile = require('./Gulpfile');
var staticBuild = require('static-react-router/build');
var _ = require('lodash');
var path = require('path');
var util = require('util');
var stylizeData = require('./lib/stylizeData');
var routes = {
  Index: require('./app/scripts/components/Index'),
  Category: require('./app/scripts/components/Category')
}

var stylizeFrontEnd = function() {

  var pub = {
    /**
     * Scaffold out the front-end
     *
     * @param destination string
     *   Absolute path to a local directory.
     */
    init: function(destination) {
      console.log('copy CSS, JS and Images into ', destination);
    },

    build: function(options, callback) {
      console.log('building front-end');

      var options = stylizeData(options);

      // Write options to disk so they can be bundled into the client-side app
      // with browserify.
      fs.writeFileSync(
        path.join(options.dest, 'compiled/data.js'),
        'module.exports = ' + util.inspect(options, {depth: null}),
        'utf-8'
      );

      if (gulp.tasks.watch) {
        gulp.start('watch');
      }

      options.routes = _.map(options.routes, function(route) {
        // Replace reference with the actual react component.
        // console.log('route', route);
        route.handler = routes[route.handler];
        return route;
      });
      options.props.routes = options.routes;
      staticBuild(options); // Writes static HTML to destination;
      typeof callback === 'function' && callback();
    },

    watch: function(options) {
      console.log('watch front-end');
    }
  }

  return pub;
}

module.exports = stylizeFrontEnd();
