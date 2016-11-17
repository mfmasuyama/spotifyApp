export function albumDetailController($scope, $routeParams, $location, ApiService,StarService) {
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
    }.bind(this));

    this.toIndex = function() {
        $location.path("/");
        this.stopTrack();
    }.bind(this);

    this.toResults = function() {
        $location.path("/results/" + this.search);
        this.stopTrack();
    }.bind(this);

    this.toBandAlbums = function() {
        $location.path("/band-albums/" + this.artist.id);
        this.stopTrack();
    }.bind(this);

    this.backToResults = function() {
        $location.path("/results/" + this.artist.name);
        this.stopTrack();
    }.bind(this);

    this.playTrack = function(track) {
        if(typeof this.audioObject === "undefined") {
            this.audioObject = new Audio(track.preview_url);
            this.audioObject.play();
        } else {
            this.audioObject.pause();
            this.audioObject = new Audio(track.preview_url);
            this.audioObject.play();
        }
    }.bind(this);

    this.stopTrack = function() {
        if(typeof this.audioObject !== "undefined") {
            this.audioObject.pause();
        }
    }.bind(this);

    this.changeStatus=function(item){
        StarService.click(item);
    }
}
