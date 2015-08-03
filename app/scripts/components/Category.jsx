// components/Category.jsx
var React = require('react');
var Router = require('react-router');
var SgPattern = require('./SgPattern');
var _ = require('lodash');

var Category = React.createClass({
  mixins: [ Router.State ],

  render: function () {
    var path = this.getPathname();
    var category = path.split('/').slice(2).join('/');
    var patterns = _.filter(
      this.props.patterns,
      function(pattern) {
        return _.startsWith(pattern.category, category);
      }
    );

    return (
      <div className="sg-patterns">
        {patterns.map(function(pattern) {
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

module.exports = Category
