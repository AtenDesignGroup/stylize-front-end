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
  Root: require('../app/scripts/components/Root'),
  Default: require('../app/scripts/components/Index'),
}

module.exports = function (options) {
  // Merge options with defaults.
  var config = _.assign(defaults, options);

  config.categories = _.map(options.categories, function(category){
    var processedCategory = category;
    var parent = category.id.split('/').slice(0, -1).join('/');
    if (parent !== "") {
      processedCategory.parentId = parent;
    }
    return processedCategory;
  });

  config.props.patterns = config.patterns;
  config.props.categories = config.categories;
  config.routes = stylizeRoutes.createRoutes(config.categories, config.patterns, config.baseUrl);
  config.props.routes = config.routes;

  return config;
};
