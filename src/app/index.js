import {routes} from "./routes";
import {ApiService} from "./services";

angular
    .module("App", ["ngRoute"])
    .config(routes)
    .service("ApiService", ApiService)

    .controller('myCtrl', ['$scope', '$http', function($scope, $http, ApiService) {
        $scope.myCtrl = this;
        console.log($scope);
    }])
    .service('spotiApi', ['$http', function($http) {

    this.getFavourites = function() {
      return $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=579989834308dc1b0309510990ad9246'
      }).then(function(response) {
          return response.data.genres;
      }, function () {
        console.error('La llamada fallo');
      })
    }

    this.getArtists = function() {

    }
}]);
