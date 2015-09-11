/**
 * Data preperation.
 */
var _ = require('lodash');
var path = require('path');
var stylizeRoutes = require('./stylizeRoutes');

var baseUrl = '/';

var defaults = {
  baseUrl: baseUrl,
  redirects: [],
  routes: [],
  dest: path.join(__dirname, '../../build/'),
  props: {
    name: 'Stylize',
    baseUrl: baseUrl,
    stylesheets: [
     '/assets/css/main.css',
     '/assets/css/prism.css'
    ],
    javascripts: [
     '/assets/img/svg/grunticon.loader.js',
     '/assets/js/vendor.js',
     '/assets/js/main.js',
    ]
  },
  Root: 'Root',
  Default: 'Index',
}

var addCategoryParentIds = function(categories) {
  return _.map(categories, function(category){
    var processedCategory = category;
    var parent = category.id.split('/').slice(0, -1).join('/');
    if (parent !== "") {
      processedCategory.parentId = parent;
    }
    return processedCategory;
  });
}

module.exports = function (options) {
  // Merge options with defaults.
  var config = _.assign(defaults, options);

  // Add parentIds for categories so they can be properly nested.
  config.categories = addCategoryParentIds(config.categories);

  config.props.categories = config.categories;
  config.props.patterns = config.patterns;
  config.routes = stylizeRoutes.createRoutes(config.categories, config.patterns, config.baseUrl);
  config.props.routes = config.routes;
  return config;
};
