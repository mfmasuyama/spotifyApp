export function resultsController($scope, $http, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = function() {
        ApiService.getArtists($scope.resultsCtrl.artist)
        .then(function(artists) {
            this.artists = artists.items;
        }.bind(this));
    }
}
