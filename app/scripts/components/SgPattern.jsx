/** @jsx React.DOM */
var React = require('react');
var IconButton = require('./IconButton');
var Code = require('./Code');
var path = require('path');

var SgPattern = React.createClass({
  displayName: 'sgpattern',

  render: function () {
    var infoID = "sg-pattern-info-" + this.props.id;
    var codeID = "sg-pattern-code-" + this.props.id;
    var uri = this.props.uri;
    // var uri = path.relative(this.getPathname(), this.props.uri);

    return (
      <div className="sg-pattern">
        <header className="sg-pattern-header">
          <h3 className="sg-pattern-title">{this.props.name}</h3>
          <div className="sg-pattern-toggles">
            <IconButton icon="target" className="sg-toggle sg-toggle-filter" onClick={this.onFilterToggleClick} >Filter</IconButton>
            <IconButton icon="info" className="sg-toggle sg-toggle-info" onClick={this.props.onPatternInfoClick.bind(null, this.props.id)} aria-expanded={this.props.infoExpanded} aria-controls={infoID} >Description</IconButton>
            <IconButton icon="code" className="sg-toggle sg-toggle-code" onClick={this.props.onPatternCodeClick.bind(null, this.props.id)} aria-expanded={this.props.codeExpanded} aria-controls={codeID} >Code</IconButton>
          </div>
        </header>
        <div className="sg-pattern-info" id={infoID} aria-expanded={this.props.infoExpanded} >{this.props.description}</div>
        <iframe src={uri} frameBorder="0" className="sg-pattern-frame"></iframe>
        <pre id={codeID} className="sg-pattern-code language-handlebars" aria-expanded={this.props.codeExpanded} >
          <Code code={this.props.code} />
        </pre>
      </div>
    );
  }
});

module.exports = SgPattern;
