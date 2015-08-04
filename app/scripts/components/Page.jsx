// components/Page
var React = require('react/addons')
var SgHeader = require('./SgHeader')
var SgDrawer = require('./SgDrawer')
var SgPattern = require('./SgPattern')
var _ = require('lodash')

var Page = React.createClass({
  /**
   * Set the initial page state.
   */
  getInitialState: function() {
    var toggles = _.map(this.props.patterns, function(pattern){
      return {
        id: pattern.id,
        code: true,
        info: true
      }
    });
    toggles = _.indexBy(toggles, 'id');

    return {
      toggles: toggles,
      drawerExpanded: false,
      toggleAll: {
        code: true,
        info: true
      },
    };
  },

  /**
   * Converts a flat array into a parent -> child tree
   */
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

  /**
   * Checks a list of toggles to verify that all are set to true.
   * Returns true if all toggles of the given property are expanded.
   */
  validateToggleAll: function(toggles, property) {
    var offToggles = _.filter(toggles, function(toggle){
      return !toggle[property];
    });
    return offToggles.length <= 0;
  },

  /**
   * Toggles the property of the given pattern between true and false.
   */
  toggleProperty: function(id, property) {
    var toggles = this.state.toggles;
    var toggleAll = this.state.toggleAll;

    toggles[id][property] = !toggles[id][property];
    toggleAll[property] = this.validateToggleAll(toggles, property);

    this.setState({
      toggles: toggles,
      toggleAll: toggleAll
    });
  },

  /**
   * Toggles the property of all patterns between true and false.
   * If any patterns are collapsed, all are expanded.
   * If all patterns are expanded, all are collapsed.
   */
  toggleAllProperty: function(property) {
    var toggles = this.state.toggles;
    var toggleAll = this.state.toggleAll;
    var value = !toggleAll[property];

    _.forEach(toggles, function(n, id){
      toggles[id][property] = value;
    });

    toggleAll[property] = value;

    this.setState({
      toggles: toggles,
      toggleAll: toggleAll
    });
  },

  /**
   * Drawer click handler.
   */
  handleDrawerToggleClick: function(e){
    this.setState({
      drawerExpanded: !this.state.drawerExpanded
    });
  },

  /**
   * Toggle all code click handler.
   */
  handleToggleAllCodeClick: function(e) {
    this.toggleAllProperty('code');
  },

  /**
   * Toggle all info click handler.
   */
  handleToggleAllInfoClick: function(e) {
    this.toggleAllProperty('info');
  },

  /**
   * Toggle pattern code click handler.
   */
  handlePatternCodeClick: function(id) {
    this.toggleProperty(id, 'code');
  },

  /**
   * Toggle pattern info click handler.
   */
  handlePatternInfoClick: function(id) {
    this.toggleProperty(id, 'info');
  },

  /**
   * Adds props to child components since we cannot add them directly to
   * a route handler.
   */
  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      var id = child.key;

      if (child.type === SgPattern.type) {
        var childProps = {
          onPatternCodeClick: this.handlePatternCodeClick,
          onPatternInfoClick: this.handlePatternInfoClick,
          infoExpanded: this.state.toggles[id].info,
          codeExpanded: this.state.toggles[id].code,
        };
        return React.addons.cloneWithProps(child, childProps);
      }
      return child;
    }.bind(this))
  },

  /**
   * Render Method.
   */
  render: function () {
    var categoryTree = this.unflatten(this.props.categories);
    return (
      <div {...this.props} className="page">
        <SgHeader onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} onToggleAllCodeClick={this.handleToggleAllCodeClick} onToggleAllInfoClick={this.handleToggleAllInfoClick} />
        <SgDrawer onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} tree={categoryTree} />
        <div className="sg-patterns">
          {this.renderChildren()}
        </div>
      </div>
    )
  }
})

module.exports = Page;
