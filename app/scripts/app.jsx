/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var options = require('./data');
// var options = require('../../index.js').prepareOptions({});

require('static-react-router/app')(options);

grunticon([
    "/assets/img/svg/icons.data.svg.css",
    "/assets/img/svg/icons.data.png.css",
    "/assets/img/svg/icons.fallback.css"
  ],
  grunticon.svgLoadedCallback
);
