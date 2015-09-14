/** @jsx React.DOM */
var React = require('react/addons'),
    SgTree = require('./SgTree'),
    IconButton = require('./IconButton'),
    _ = require('lodash');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Code = React.createClass({
  componentDidMount: function () {
    this._hightlight();
  },

  componentDidUpdate: function () {
    this._hightlight();
  },

  _hightlight: function () {
    Prism.highlightElement(this.refs.code.getDOMNode());
  },

  render: function() {
    return (
      <code ref="code">{this.props.code}</code>
    );
  }
});

module.exports = Code;
