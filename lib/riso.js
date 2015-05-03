var express = require('express')
var router = require('./router')

exports = module.exports = createApplication;

function createApplication() {
  var app = express()

  app.use(router());

  return app
}
