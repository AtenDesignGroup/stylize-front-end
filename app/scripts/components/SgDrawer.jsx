/** @jsx React.DOM */
var React = require('react/addons'),
    SgTree = require('./SgTree'),
    IconButton = require('./IconButton'),
    _ = require('lodash');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SgDrawer = React.createClass({
  render: function() {
    return (
      <ReactCSSTransitionGroup transitionName="drawer">
        <div id="sg-drawer" className="sg-drawer" aria-expanded={this.props.expanded}>
          <IconButton icon="close" className="sg-close-toggle" onClick={this.props.onDrawerToggleClick} aria-expanded={this.props.expanded} aria-controls="sg-drawer" >Close</IconButton>
          <SgTree className="sg-menu" tree={this.props.tree} />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = SgDrawer;
