/** @jsx React.DOM */
var React = require('react');
var IconButton = require('./IconButton');

var SgPattern = React.createClass({
  displayName: 'sgpattern',

  getInitialState: function() {
    return {
      infoExpanded: false,
      codeExpanded: false,
    };
  },
  onFilterToggleClick: function () {
    console.log('onFilterToggleClick');
  },
  onInfoToggleClick: function () {
    this.setState({
      infoExpanded: !this.state.infoExpanded
    });
  },
  onCodeToggleClick: function () {
    this.setState({
      codeExpanded: !this.state.codeExpanded
    });
  },
  render: function () {
    var infoID = "sg-pattern-info-" + this.props.id;
        codeID = "sg-pattern-code-" + this.props.id;

    return (
      <div className="sg-pattern">
        <header className="sg-pattern-header">
          <h3 className="sg-pattern-title">{this.props.name}</h3>
          <div className="sg-pattern-toggles">
            <IconButton icon="target" className="sg-toggle sg-toggle-filter" onClick={this.onFilterToggleClick} >Filter</IconButton>
            <IconButton icon="info" className="sg-toggle sg-toggle-info" onClick={this.onInfoToggleClick} aria-expanded={this.state.infoExpanded} aria-controls={infoID} >Description</IconButton>
            <IconButton icon="code" className="sg-toggle sg-toggle-code" onClick={this.onCodeToggleClick} aria-expanded={this.state.codeExpanded} aria-controls={codeID} >Code</IconButton>
          </div>
        </header>
        <div className="sg-pattern-info" id={infoID} aria-expanded={this.state.infoExpanded} >{this.props.description}</div>
        <iframe src={this.props.url} frameBorder="0" className="sg-pattern-frame"></iframe>
        <pre id={codeID} className="sg-pattern-code" aria-expanded={this.state.codeExpanded} >
          <code>{this.props.code}</code>
        </pre>
      </div>
    );
  }
});

module.exports = SgPattern;
