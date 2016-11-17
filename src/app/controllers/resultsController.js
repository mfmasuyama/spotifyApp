export function resultsController($scope, $routeParams, $location, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = function() {
        ApiService.getArtists($scope.resultsCtrl.search)
        .then(function(response) {
            this.artists = response;
        }.bind(this));
    }

    // Get artists from index
    ApiService.getArtists($routeParams.search)
    .then(function(response) {
        this.artists = response;
    }.bind(this));

    this.toIndex = function() {
        $location.path("/");
    }.bind(this);

    this.toBandAlbums = function(albumId) {
        $location.path("/band-albums/" + albumId);
    }.bind(this);
}
