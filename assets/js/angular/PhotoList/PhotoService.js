app.factory('photoService', function($http) {
  return {
    getRandomPhoto: function() {
      //since $http.get returns a promise,
      //and promise.then() also returns a promise
      //that resolves to whatever value is returned in it's
      //callback argument, we can return that.
      return $http.get('https://familysearch.org/artifactmanager/artifacts/'+getRandomInt(1, 500000)+'.json').then(function(result) {
        console.log("result from randomPhoto", result);
        console.log(result.data);
        return result.data;
      }, function(error) {
        console.error("error from randomPhoto", error);
      });
    },
    getRandomAlbumArtifacts: function() {
      //since $http.get returns a promise,
      //and promise.then() also returns a promise
      //that resolves to whatever value is returned in it's
      //callback argument, we can return that.
      return $http.get('https://familysearch.org/artifactmanager/albums/'+getRandomInt(1, 35000)+'/artifacts.json').then(function(result) {
        console.log("result from getRandomAlbumArtifacts", result);
        console.log(result.data.artifactList.artifact);
        return result.data.artifactList.artifact;
      }, function(error) {
        console.error("error from getRandomAlbumArtifacts", error);
//        getRandomAlbumArtifacts();
      });
    }
  }
});

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
