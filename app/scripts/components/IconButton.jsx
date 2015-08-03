/** @jsx React.DOM */
var React = require('react');

var IconButton = React.createClass({
  render: function() {
    var iconClass = this.props.icon ? 'icon_' + this.props.icon : '';
    this.props.className = this.props.className ? iconClass + ' ' + this.props.className : iconClass;

    return (
      <button {...this.props}>{this.props.children}</button>
    );
  }
});

module.exports = IconButton;
