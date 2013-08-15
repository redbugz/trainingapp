/**
 * Module dependencies
 */
var join = require("path").join;


/**
 * Defines
 */
var ARTIFACT_MANAGER_URL = "https://familysearch.org/artifactmanager";

module.exports = function() {
	return ARTIFACT_MANAGER_URL + "/" + join.apply(null, arguments);
};
