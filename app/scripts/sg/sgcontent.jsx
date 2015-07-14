/** @jsx React.DOM */
var React = require('react');
var Sgpattern = require('./sgpattern');

var sgcontent = React.createClass({
  displayName: 'sgcontent',
  render: function () {
    return (
      <div className="sg-patterns">
      {this.props.patterns.map(function(pattern) {
        return <Sgpattern
          key={pattern.id}
          id={pattern.id}
          name={pattern.name}
          code={pattern.code}
          description={pattern.description}
        />;
      })}

      </div>
    );
  }
});

module.exports = sgcontent;
