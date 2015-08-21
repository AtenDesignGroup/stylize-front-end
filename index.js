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

var staticBuild = require('static-react-router/build');
var _ = require('lodash');
var path = require('path');
var stylizeData = require('./lib/stylizeData');

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
      staticBuild(stylizeData(options)); // Writes static HTML to destination;

      typeof callback === 'function' && callback();
    },

    watch: function(options) {
      console.log('watch front-end');
    }
  }

  return pub;
}

module.exports = stylizeFrontEnd();
