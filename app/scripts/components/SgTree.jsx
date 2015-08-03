/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash'),
    Router = require('react-router'),
    Link = Router.Link,
    TreeView = require('react-treeview');

var SgTree = React.createClass({
  getInitialState: function() {
    var collapsedBookkeeping = this.props.tree.map(function() {
      return false;
    });
    return {
      collapsedBookkeeping: collapsedBookkeeping
    };
  },

  handleClick: function(i) {
    this.state.collapsedBookkeeping[i] = !this.state.collapsedBookkeeping[i];
    this.setState({collapsedBookkeeping: this.state.collapsedBookkeeping});
  },

  collapseAll: function() {
    this.setState({
      collapsedBookkeeping: this.state.collapsedBookkeeping.map(function() {return true;})
    });
  },

  render: function() {
    var collapsedBookkeeping = this.state.collapsedBookkeeping;

    return (
      <div className="sg-drawer-content">
        {this.props.tree.map(function(node, i) {
          var name = node.name;
          var label = <span className="node">{name}</span>;
          var children = "";
          var path = "category/" + node.id;

          if (node.children) {
            children = node.children.map(function(category, j) {
              var label = <span className="node">{category.name}</span>;
              var subpath = "category/" + category.id;
              return (
                <TreeView nodeLabel={label} key={category.id} >
                  <Link to={subpath}>Show All</Link>
                </TreeView>
              );
            });
          }

          return (
            <TreeView key={this.props.id + '|' + i} nodeLabel={label} collapsed={collapsedBookkeeping[i]}>
              {children}
              <Link to={path}>Show All</Link>
            </TreeView>
          );
        }, this)}
      </div>
    );
  }
});

module.exports = SgTree;
