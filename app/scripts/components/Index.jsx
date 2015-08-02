// components/Index.jsx
var React = require('react')
var SgPattern = require('./SgPattern');

var Index = React.createClass({
  render: function () {
    return (
      <div className="sg-patterns">
        {this.props.patterns.map(function(pattern) {
          return <SgPattern
            key={pattern.id}
            id={pattern.id}
            name={pattern.name}
            code={pattern.code}
            description={pattern.description}
          />;
        })}
      </div>
    )
  }
})

module.exports = Index
