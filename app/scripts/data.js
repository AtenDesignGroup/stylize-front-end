var path = require('path');

// Project specific data
var patterns = require('./data/patterns');
var categories = require('./data/categories');

// Route Handlers
var Index = require('./components/Index');
var Category = require('./components/Category');

var baseUrl = '/';

module.exports = {
  baseUrl: baseUrl,
  redirects: [
  ],
  routes: [],
  dest: path.join(__dirname, '../../build/'),
  props: {
    name: 'test site name make dynamic',
    baseUrl: baseUrl,
    stylesheets: [
     '/assets/css/main.css'
    ],
    javascripts: [
     '/assets/img/svg/grunticon.loader.js',
     '/assets/js/vendor.js',
     '/assets/js/main.js',
    ]
  },
  Root: require('./components/Root'),
  Default: require('./components/Index'),
};
