/** @jsx React.DOM */
var React = require('react');

var SgHeader = React.createClass({
  displayName: 'sgheader',
  render: function () {
    return (
      <header className="sg-header">
        <button className="sg-header-toggle sg-drawer-toggle" onClick={this.props.onDrawerToggleClick} aria-expanded={this.props.expanded} aria-controls="sg-drawer" >Table of Contents</button>
        <div className="sg-header-toggles">
          <h4 className="sg-header-toggles-label">Toggle All</h4>
          <div className="sg-toggles">
            <button className="sg-toggle sg-toggle-info">Descriptions</button>
            <button className="sg-toggle sg-toggle-code">Code</button>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = SgHeader;
