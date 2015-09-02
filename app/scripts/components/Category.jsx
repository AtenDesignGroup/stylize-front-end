// components/Category.jsx
var React = require('react');
var Router = require('react-router');
var Page = require('./Page');
var SgPattern = require('./SgPattern');
var _ = require('lodash');

var Category = React.createClass({
  mixins: [ Router.State ],

  render: function () {
    var currentPath = this.getPathname();
    var category = currentPath.split('/').slice(0, -1).join('/');
    var patterns = _.filter(
      this.props.patterns,
      function(pattern) {
        return _.startsWith(pattern.category, category);
      }
    );
    return (
      <Page {...this.props}>
        {patterns.map(function(pattern) {
          return <SgPattern
            key={pattern.id}
            id={pattern.id}
            name={pattern.name}
            code={pattern.code}
            description={pattern.description}
            uri={pattern.uri}
          />;
        })}
      </Page>
    )
  }
})

module.exports = Category
