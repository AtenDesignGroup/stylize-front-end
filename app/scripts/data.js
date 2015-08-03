var path = require('path');

// Project specific data
var patterns = require('./data/patterns');
var categories = require('./data/categories');

// Route Handlers
var Index = require('./components/Index');
var Category = require('./components/Category');

var baseUrl = '/';

// Routes
var routes = [
  {
    path: '',
    name: 'index',
    handler: Index
  },
];

// Create a route for each category.
var categoryRoutes = categories.map(function(category) {
  return {
    path: 'category/' + category.id,
    name: 'category/' + category.id,
    handler: Category,
  }
});

// Add category routes to the existing routes.
routes = routes.concat(categoryRoutes);

// module.exports = data;

module.exports = {
  baseUrl: baseUrl,
  routes: routes,
  redirects: [
  ],
  dest: path.join(__dirname, '../../debug/'),
  props: {
    name: 'test site name make dynamic',
    baseUrl: baseUrl,
    routes: routes,
    stylesheets: [ '/css/main.css' ],
    javascripts: [
     '/img/svg/grunticon.loader.js',
     '/scripts/vendor.js',
     '/scripts/main.js',
     ],
    patterns: patterns,
    categories: categories
  },
  Root: require('./components/Root'),
  Default: require('./components/Index'),
};
