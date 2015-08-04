/** @jsx React.DOM */
var React = require('react');
var IconButton = require('./IconButton');

var SgHeader = React.createClass({
  displayName: 'sgheader',
  render: function () {
    return (
      <header className="sg-header">
        <IconButton icon="menu" className="sg-header-toggle sg-drawer-toggle" onClick={this.props.onDrawerToggleClick} aria-expanded={this.props.expanded} aria-controls="sg-drawer" >Table of Contents</IconButton>
        <div className="sg-header-toggles">
          <h4 className="sg-header-toggles-label">Toggle All</h4>
          <div className="sg-toggles">
            <IconButton icon="info" className="sg-toggle sg-toggle-info" onClick={this.props.onToggleAllInfoClick}>Descriptions</IconButton>
            <IconButton icon="code" className="sg-toggle sg-toggle-code" onClick={this.props.onToggleAllCodeClick}>Code</IconButton>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = SgHeader;
