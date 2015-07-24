/** @jsx React.DOM */
var React = require('react');
var Sgheader = require('./sgheader');
var Sgdrawer = require('./sgdrawer');
var Sgcontent = require('./sgcontent');
var patterns = require('./services/patterns');
var categories = require('./services/categories');
var _ = require('lodash');

var sg = React.createClass({
  displayName: 'sg',
  getInitialState: function() {
    return {
      categories: categories,
      patterns: patterns,
      drawerExpanded: false
    };
  },

  unflatten: function( array, parent, tree ){
    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : {};
    var that = this;

    var children = _.filter(
      array,
      function(child) {
        return child.parentId == parent.id; }
    );

    if (!_.isEmpty( children )){
      if( parent.id == undefined ){
        tree = children;
      } else {
        parent['children'] = children
      }
      _.each(
        children,
        function(child){ that.unflatten( array, child ); }
      );
    }
    return tree;
  },

  handleDrawerToggleClick: function(e){
    this.setState({
      drawerExpanded: !this.state.drawerExpanded
    });
  },

  render: function () {
    var categoryTree = this.unflatten(this.state.categories);

    return (
      <div>
        <Sgheader onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} />
        <Sgdrawer onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} tree={categoryTree} />
        <Sgcontent patterns={this.state.patterns} />
      </div>
    );
  }
});

module.exports = sg;
