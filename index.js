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

var projectDependencies = {
  "stylizer-front-end": "https://github.com/AtenDesignGroup/stylizer-front-end",
  "es6-promise": "^2.0.1",
  "lodash": "^3.10.0",
  "react": "^0.12.2",
  "react-html": "^2.1.0",
  "react-router": "^0.12.4",
  "react-treeview": "^0.3.12",
  "reactify": "^1.1.1",
  "static-react-router": "https://github.com/pixelwhip/static-react-router.git"
}

var stylizeFrontEnd = function() {

  function handleStd(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  }

  var pub = {
    /**
     * Scaffold out the front-end
     *
     * @param destination string
     *   Absolute path to a local directory.
     */
    init: function(destination) {
      console.log('Installing front-end dependencies... ');

      var pathToPackageJSON = path.join(process.cwd(), 'package.json');

      var packageJSON = fs.readFile(pathToPackageJSON, { encoding: 'utf-8' }, function (err, data) {
        if (err) handleStd(err);
        data = JSON.parse(data);
        data.dependencies = _.assign(data.dependencies, projectDependencies);

        fs.writeFileSync(pathToPackageJSON, JSON.stringify(data, null, "  "), { encoding: 'utf-8' }, function(err, data) {
          console.log('packageJSON updated.  Time to install!');
          if (err) { handleStd(err);}
        });
      });
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
