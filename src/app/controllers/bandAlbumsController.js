export function bandAlbumsController($scope, $routeParams, $location, ApiService) {
    $scope.bandAlbumsCtrl = this;

    ApiService.getAlbums($routeParams.bandId)
    .then(function(response) {
        this.albums = response;
    }.bind(this));

    ApiService.getArtist($routeParams.bandId)
    .then(function(response) {
        this.artist = response;
    }.bind(this));

    this.toIndex = function() {
        $location.path("/");
    }.bind(this);

    this.toResults = function() {
        $location.path("/results/" + $scope.bandAlbumsCtrl.search);
    }.bind(this);

    this.toAlbumDetail = function(albumId) {
        $location.path("/album-detail/" +  $routeParams.bandId + "/" + albumId);
    }.bind(this);
}
