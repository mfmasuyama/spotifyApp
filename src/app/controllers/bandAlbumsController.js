export function bandAlbumsController($scope, $routeParams, ApiService) {
    $scope.bandAlbumsCtrl = this;

    ApiService.getAlbums($routeParams.bandId)
    .then(function(response) {
        this.albums = response;
        console.log(response);
    }.bind(this));

    ApiService.getArtist($routeParams.bandId)
    .then(function(response) {
        this.artist = response;
        console.log(response);
    }.bind(this));

    // ApiService.getReleaseDate($routeParams.albumId)
}
