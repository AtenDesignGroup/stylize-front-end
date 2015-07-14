/** @jsx React.DOM */
var React = require('react/addons'),
    _ = require('lodash');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var sgdrawer = React.createClass({
  render: function() {
    return (
      <ReactCSSTransitionGroup transitionName="drawer">
        <div id="sg-drawer" className="sg-drawer" aria-expanded={this.props.expanded}>
        <button className="sg-close-toggle" onClick={this.props.onDrawerToggleClick} aria-expanded={this.props.expanded} aria-controls="sg-drawer" >Close</button>
        <ul className="" key="1">
          {this.props.categories.map(function(category) {
            return <li key={category.id}>{category.name}</li>;
          })}
        </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = sgdrawer;
