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
var defaults = require('./app/scripts/data'); // Custom app config

// Route Handlers
var Index = require('./app/scripts/components/Index');
var Category = require('./app/scripts/components/Category');

var stylizeFrontEnd = function() {
  function createRoute(url, name, handler) {
    return {
      path: url,
      name: name,
      handler: handler,
    }
  }

  function createCategoryRoutes(categories) {
    // Create a route for each category.
    return categories.map(function(category) {
      var url = path.join('category', category.id);
      return createRoute(url, url, Category);
    });
  }

  function createPatternRoutes(patterns) {
    // Create a route for each category.
    return patterns.map(function(pattern) {
      var url = path.join('category', pattern.category, pattern.id);
      return createRoute(url, pattern.name, Category);
    });
  }

  function createRoutes(categories, patterns) {
    var routes = [
      // Add index route.
      createRoute('', 'index', Index),
    ];

    // Add dynamic routes.
    routes = routes.concat(
      createCategoryRoutes(categories),
      createPatternRoutes(patterns)
    );

    return routes;
  }

  var pub = {
    build: function(options, callback) {
      console.log('building front-end');

      // Merge options with defaults.
      var config = _.assign(defaults, options);

      config.props.patterns = config.patterns;
      config.props.categories = config.categories;
      config.routes = createRoutes(config.categories, config.patterns);
      config.props.routes = config.routes;

      staticBuild(config); // Writes static HTML to destination;

      typeof callback === 'function' && callback();
    },

    watch: function(options) {
      console.log('watch front-end');
    }
  }

  return pub;
}

module.exports = stylizeFrontEnd();
