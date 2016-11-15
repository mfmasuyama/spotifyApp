export function albumDetailController($scope, $routeParams, ApiService) {
    $scope.albumDetailCtrl = this;

    ApiService.getTracks($routeParams.albumId)
    .then(function(response) {
        this.tracks = response;
    }.bind(this));

    ApiService.getArtist($routeParams.bandId)
    .then(function(response) {
        this.artist = response;
    }.bind(this));

    ApiService.getAlbum($routeParams.albumId)
    .then(function(response) {
        this.album = response;
        console.log(response);
    }.bind(this));

}
