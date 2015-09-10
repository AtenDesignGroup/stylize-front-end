var path = require('path');

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
     '/assets/css/main.css'
    ],
    javascripts: [
     '/assets/img/svg/grunticon.loader.js',
     '/assets/js/vendor.js',
     '/assets/js/main.js'
    ]
  }
}

module.exports = function (options) {
  // Merge options with defaults.
  var config = _.assign(defaults, options);

  config.props.patterns = config.patterns;
  config.props.categories = config.categories;
  config.routes = createRoutes(config.categories, config.patterns);
  config.props.routes = config.routes;
  return config;
};
