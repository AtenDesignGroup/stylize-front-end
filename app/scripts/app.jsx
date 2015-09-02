/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
console.log('currenPath');

var React = require('react');
var Router = require('react-router');
var options = require('./data.js');
var _ = require('lodash');

var routeComponents = {
  Root: require('./components/Root'),
  Index: require('./components/Index'),
  Category: require('./components/Category')
};
var currentPath = "/";

// Inject the bundled React components.
var routes = _.map(options.routes, function(route) {
  // Replace reference with the actual react component.
  route.handler = routeComponents[route.handler];
  return route;
});

var grunticonSheets = [];

options.routes = options.props.routes = routes;
options.Root = routeComponents.Root;
options.Default = routeComponents.Index;

// Create client version of the React router app.
require('static-react-router/app')(options);

currentPath = Router.State.getPathname();
console.log('currenPath', currentPath);

// grunticonSheets = _.map([
//     "/assets/img/svg/icons.data.svg.css",
//     "/assets/img/svg/icons.data.png.css",
//     "/assets/img/svg/icons.fallback.css"
//   ], function(sheet) {
//   return path.relative(currentPath, sheet);
// });

// // Run Grunticon.
// grunticon(grunticonSheets, grunticon.svgLoadedCallback);
