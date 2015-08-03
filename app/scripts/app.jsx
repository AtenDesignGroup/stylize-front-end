/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var options = require('./data');
require('static-react-router/app')(options);

grunticon(["/img/svg/icons.data.svg.css", "/img/svg/icons.data.png.css", "/img/svg/icons.fallback.css"], grunticon.svgLoadedCallback);
