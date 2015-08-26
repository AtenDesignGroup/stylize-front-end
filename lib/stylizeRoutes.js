/**
 * Routes array building utility.
 */

var path = require('path');

// Route Handlers
// var Index = require('../app/scripts/components/Index');
// var Category = require('../app/scripts/components/Category');

var stylizeRoutes = function() {
  /**
   * Creates a simple route object.
   */
  function createRoute(url, name, handler) {
    return {
      path: url,
      name: name,
      handler: handler,
    }
  }

  /**
   * Returns an array of dynamic Category routes
   */
  function createCategoryRoutes(categories) {
    // Create a route for each category.
    return categories.map(function(category) {
      var url = path.join('category', category.id);
      return createRoute(url, url, 'Category');
    });
  }

  /**
   * Returns an array of dynamic Pattern routes
   */
  function createPatternRoutes(patterns) {
    // Create a route for each category.
    return patterns.map(function(pattern) {
      var url = path.join('category', pattern.category, pattern.id);
      return createRoute(url, pattern.name, 'Category');
    });
  }

  /**
   * Returns the full route array.
   */
  function createRoutes(categories, patterns) {
    var routes = [
      // Add static Index route.
      createRoute('', 'index', 'Index'),
    ];

    // Add dynamic routes.
    routes = routes.concat(
      createCategoryRoutes(categories),
      createPatternRoutes(patterns)
    );

    return routes;
  }

  /**
   * Public functions
   */
  var pub = {
    createRoute: createRoute,
    createRoutes: createRoutes
  }

  return pub;
}

module.exports = stylizeRoutes();
