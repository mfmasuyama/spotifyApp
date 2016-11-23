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
            this.status = "playing";
        } else if (this.audioObject.src === track.preview_url) {
            if(this.status === "playing") {
                this.audioObject.pause();
                this.status = "paused";
            } else {
                this.audioObject.play();
                this.status = "playing";
            }
        } else {
            this.audioObject.pause();
            this.audioObject = new Audio(track.preview_url);
            this.audioObject.play();
            this.status = "playing";
        }
    }.bind(this);

    this.changePlayPauseButton = function(track) {
        if(this.audioObject.src === track.preview_url && this.status === "playing") {
            return "fa fa-pause";
        } else {
            return "fa fa-play";
        }
    }.bind(this);

    this.stopTrack = function() {
        if(typeof this.audioObject !== "undefined") {
            this.audioObject.pause();
        }
    }.bind(this);

    this.changeStatus = function(track, album){
        StarService.click(track, album);
    }

    this.changeClass = function(track) {
        if(StarService.isFavourite(track)) {
            return "yellow";
        } else {
            return "grey";
        }
    }.bind(this);

    this.orderUp = function() {
        this.tracks = ApiService.orderUp(this.tracks);
    }

    this.orderDown = function() {
        this.tracks = ApiService.orderDown(this.tracks);
    }
}
