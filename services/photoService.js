var join = require('../lib/artifact-manager')
  , HTTPError = require("http-error").HttpError;

module.exports = {
  getFeaturedPhotos: function(agent, callback) {
    agent
      .get(join("albums","1", "artifacts"))
      .end(function(err, response) {
        console.log("photo response", err, response.body);
        if (err) cb([]);
        if (!response.ok) cb([]);

        callback(response.body.artifactList.artifact);
      });
  }
}