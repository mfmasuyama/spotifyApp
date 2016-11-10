import {routes} from "./routes";
import {ApiService} from "./services";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService", ApiService)

/* FIX */
.controller('resultsCtrl', ['$scope', '$http', "ApiService", function($scope, $http, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = function(){
        ApiService.getArtists($scope.resultsCtrl.artist).then(function(artists) {
            this.artists = artists.items;
            console.log(this.artists);
        }.bind(this));
    }

}])

.service('ApiService', ['$http', function($http) {
    this.getArtists = function(name) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist"
        }).then(function(response) {
            return response.data.artists;
        }, function() {
            console.error('Error');
        })
    }
}]);
