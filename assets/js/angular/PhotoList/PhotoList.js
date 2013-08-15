var app = angular.module('photoList', ['firebase']).
  value('fbURL', 'https://fs-trainingapp-allredlt.firebaseio.com/').
  factory('Photos', function(angularFireCollection, fbURL) {
    return angularFireCollection(fbURL);
  }).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'js/angular/PhotoList/list.html.js'}).
      when('/edit/:photoId', {controller:EditCtrl, templateUrl:'js/angular/PhotoList/detail.html.js'}).
      when('/new', {controller:CreateCtrl, templateUrl:'js/angular/PhotoList/album.html.js'}).
      otherwise({redirectTo:'/'});
  });

function ListCtrl($scope, Photos) {
  $scope.photos = Photos;
}

function CreateCtrl($scope, $location, $timeout, Photos, photoService) {
  $scope.artifacts = photoService.getRandomAlbumArtifacts();
//  photoService.getRandomPhoto().then(function(data) {
//    console.log(data);
//    $scope.photo = {
//      name: data.title || data.description || data.originalFilename || data.slug,
//      site: data.thumbUrl,
//      description: data.description
//    };
//  });
  $scope.save = function() {
    Photos.add($scope.photo, function() {
      $timeout(function() { $location.path('/'); });
    });
  }
  $scope.add = function(item) {
    $scope.photo = {
      name: item.title || item.originalFilename || item.slug,
      thumb: item.thumbUrl,
      site: "https://familysearch.org/photos/images/"+item.id,
      description: item.description
    };
    Photos.add($scope.photo, function() {
      $timeout(function() { $location.path('/'); });
    });
  }
  $scope.tryAgain = function() {
    $scope.artifacts = photoService.getRandomAlbumArtifacts();
  }
}

function EditCtrl($scope, $location, $routeParams, angularFire, fbURL) {
  angularFire(fbURL + $routeParams.photoId, $scope, 'remote', {}).
    then(function() {
      $scope.photo = angular.copy($scope.remote);
      $scope.photo.$id = $routeParams.photoId;
      $scope.isClean = function() {
        return angular.equals($scope.remote, $scope.photo);
      }
      $scope.destroy = function() {
        $scope.remote = null;
        $location.path('/');
      };
      $scope.save = function() {
        $scope.remote = angular.copy($scope.photo);
        $location.path('/');
      };
    });
}

