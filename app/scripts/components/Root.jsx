// components/Root
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var SgHeader = require('./SgHeader')
var SgDrawer = require('./SgDrawer')
var Html = require('react-html');
var _ = require('lodash')

var Root = React.createClass({
  getInitialState: function() {
    return {
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
    var initialProps = {
      __html: 'window.INITIAL_PROPS = ' + safeStringify(this.props)
    };

    var categoryTree = this.unflatten(this.props.categories);

    return (
      <Html {...this.props}>
        <head>
          <title>{this.props.title}</title>
        </head>
          <SgHeader onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} />
          <SgDrawer onDrawerToggleClick={this.handleDrawerToggleClick} expanded={this.state.drawerExpanded} tree={categoryTree} />
          <RouteHandler {...this.props} path={this.state.path}/>
          <script
            id='initial-props'
            dangerouslySetInnerHTML={initialProps} />
      </Html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root
