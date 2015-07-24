/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash'),
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
      <div>
        {this.props.tree.map(function(node, i) {
          var name = node.name;
          var label = <span className="node">{name}</span>;
          var children = "";

          if (node.children) {
            children = node.children.map(function(category, j) {
              var label = <span className="node">{category.name}</span>;
              return (
                <TreeView nodeLabel={label} key={category.id} >
                </TreeView>
              );
            });
          }

          return (
            <TreeView key={this.props.id + '|' + i} nodeLabel={label} collapsed={collapsedBookkeeping[i]}>
              {children}
            </TreeView>
          );
        }, this)}
      </div>
    );
  }
});

module.exports = SgTree;
