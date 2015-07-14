/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var Sg = require('./sg/sg');

React.render(
  <Sg />,
  document.getElementById('sg')
);
