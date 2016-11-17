export function albumDetailController($scope, $routeParams, $location, ApiService) {
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

    this.toIndex = function() {
        $location.path("/");
    }.bind(this);

    this.toResults = function() {
        $location.path("/results/" + this.search);
    }.bind(this);

    this.toBandAlbums = function() {
        $location.path("/band-albums/" + this.artist.id);
    }.bind(this);
}
