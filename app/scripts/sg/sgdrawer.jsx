/** @jsx React.DOM */
var React = require('react/addons'),
    SgTree = require('./sgtree'),
    _ = require('lodash');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var sgdrawer = React.createClass({
  render: function() {
    return (
      <ReactCSSTransitionGroup transitionName="drawer">
        <div id="sg-drawer" className="sg-drawer" aria-expanded={this.props.expanded}>
          <button className="sg-close-toggle" onClick={this.props.onDrawerToggleClick} aria-expanded={this.props.expanded} aria-controls="sg-drawer" >Close</button>
          <SgTree className="sg-menu" tree={this.props.tree} />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = sgdrawer;
