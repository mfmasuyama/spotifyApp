import {routes} from "./routes";
import {ApiService} from "./services";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService", ApiService)

/* FIX */
.controller('resultsCtrl', ['$scope', '$http', "ApiService", function($scope, $http, ApiService) {
    $scope.resultsCtrl = this;

    ApiService.getArtists().then(function(artists) {
        this.artists = artists;
    }.bind(this));
}])
.service('ApiService', ['$http', function($http) {
    this.getArtists = function() {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + this.artist + "&type=artist"
        }).then(function(response) {
            return response.data.artists;
        }, function () {
            console.error('La llamada fallo');
        })
    }
}]);
