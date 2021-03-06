module.exports = function (minify) {

  return function startServer () {

    var connect     = require('connect'),
        serveStatic = require('serve-static'),
        openBrowser = require('open');

    var c = require('./config');

    var port = 3000;
    connect().use(serveStatic(c.TARGET_FOLDER)).listen(port);
    openBrowser('http://localhost:' + port);
  };
};
