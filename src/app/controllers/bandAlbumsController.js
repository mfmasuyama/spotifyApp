export function bandAlbumsController($scope, $routeParams, $location, ApiService) {
    $scope.bandAlbumsCtrl = this;

    ApiService.getAlbums($routeParams.bandId)
    .then((response) => {
        this.albums = response;
    });

    ApiService.getArtist($routeParams.bandId)
    .then((response) => {
        this.artist = response;
    });

    this.toIndex = () => {
        $location.path("/");
    };

    this.toResults = () => {
        $location.path("/results/" + this.search);
    };

    this.toAlbumDetail = (albumId) => {
        $location.path("/album-detail/" +  $routeParams.bandId + "/" + albumId);
    };

    this.backToResults = () => {
        $location.path("/results/" + this.artist.name);
    };
}
