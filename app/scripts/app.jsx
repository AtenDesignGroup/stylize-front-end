/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var Router = require('react-router');
var options = require('./options');
var _ = require('lodash');
var staticApp = require('static-react-router/app');

var routes = {
  Root: require('./components/Root'),
  Index: require('./components/Index'),
  Category: require('./components/Category')
};
var currentPath = "/";
var grunticonSheets = [];

// Inject the bundled React components.
options.routes = _.map(options.routes, function(route) {
  // Replace reference with the actual react component.
  route.handler = routes[route.handler];
  return route;
});
options.props.routes = options.routes;

// Create client version of the React router app.
staticApp(options);

currentPath = Router.State.getPathname();

grunticonSheets = _.map([
    "/assets/img/svg/icons.data.svg.css",
    "/assets/img/svg/icons.data.png.css",
    "/assets/img/svg/icons.fallback.css"
  ], function(sheet) {
  return path.relative(currentPath, sheet);
});

// Run Grunticon.
grunticon(grunticonSheets, grunticon.svgLoadedCallback);
