/** @jsx React.DOM */
var React = require('react');
var Sgheader = require('./sgheader');
var Sgdrawer = require('./sgdrawer');
var Sgcontent = require('./sgcontent');
var patterns = require('./services/patterns');
var categories = require('./services/categories');

var sg = React.createClass({
  displayName: 'sg',
  getInitialState: function() {
    return {
      categories: categories,
      patterns: patterns,
      drawerExpanded: false
    };
  },

  handleDrawerToggleClick: function(e){
    this.setState({
      drawerExpanded: !this.state.drawerExpanded
    });
  },
  render: function () {
    return (
      <div>
        <Sgheader onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} />
        <Sgdrawer onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} categories={this.state.categories} />
        <Sgcontent patterns={this.state.patterns} />
      </div>
    );
  }
});

module.exports = sg;
