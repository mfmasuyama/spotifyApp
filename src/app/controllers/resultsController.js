export function resultsController($scope, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = function() {
        ApiService.getArtists($scope.resultsCtrl.artist)
        .then(function(response) {
            this.artists = response;
        }.bind(this));
    }
}
