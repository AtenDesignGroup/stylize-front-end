var path = require('path');

// Project specific data
var patterns = require('./data/patterns');
var categories = require('./data/categories');

// Route Handlers
var Index = require('./components/Index');
var Category = require('./components/Category');

var baseUrl = '/';

// module.exports = data;

module.exports = {
  baseUrl: baseUrl,
  redirects: [
  ],
  dest: path.join(__dirname, '../../debug/'),
  props: {
    name: 'test site name make dynamic',
    baseUrl: baseUrl,
    stylesheets: [
     '/css/main.css'
    ],
    javascripts: [
     '/img/svg/grunticon.loader.js',
     '/scripts/vendor.js',
     '/scripts/main.js',
    ]
  },
  Root: require('./components/Root'),
  Default: require('./components/Index'),
};
