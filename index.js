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
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var build = require('./lib/build.js');

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
     * @param {string} destination
     *   Absolute path to a local directory.
     * @param {function} callback
     */
    init: function(destination, callback) {
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
      typeof callback === 'function' && callback();
    },

    build: build,

    watch: function(options) {
      console.log('watch front-end');
    }
  }

  return pub;
}

module.exports = stylizeFrontEnd();
