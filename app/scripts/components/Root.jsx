// components/Root
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var SgHeader = require('./SgHeader')
var SgDrawer = require('./SgDrawer')
var Html = require('react-html');
var _ = require('lodash')

var Root = React.createClass({
  render: function () {
    var initialProps = {
      __html: 'window.INITIAL_PROPS = ' + safeStringify(this.props)
    };

    return (
      <Html {...this.props}>
        <head>
          <title>{this.props.title}</title>
        </head>
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            dangerouslySetInnerHTML={initialProps} />
      </Html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root
