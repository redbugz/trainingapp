/**
 * Module dependencies
 */
var woodruff = require("woodruff")
  , shared = require("shared-ui");

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, shared);


/**
 * Dev Proxies
 */
//app.configure('development', function() {
  var proxy = require("simple-http-proxy");

  app.stack.unshift({
    route: "/jenkins/",
    handle: proxy("http://54.221.235.240:8080/")
  });

//});
