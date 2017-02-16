export default class {

    constructor(
        $routeParams,
        $location,
        ApiService,
        StarService
    ) {

        this.location = $location;
        this.ApiService = ApiService;
        this.StarService = StarService;

        ApiService.getTracks($routeParams.albumId)
        .then((response) => {
            this.tracks = response;
        });

        ApiService.getArtist($routeParams.bandId)
        .then((response) => {
            this.artist = response;
        });

        ApiService.getAlbum($routeParams.albumId)
        .then((response) => {
            this.album = response;
        });

    }

        toIndex() {
            this.location.path("/");
            this.stopTrack();
        };

        toResults() {
            this.location.path("/results/" + this.search);
            this.stopTrack();
        };

        toBandAlbums() {
            this.location.path("/band-albums/" + this.artist.id);
            this.stopTrack();
        };

        backToResults() {
            this.location.path("/results/" + this.artist.name);
            this.stopTrack();
        };

        playTrack(track) {
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
        };

        changePlayPauseButton(track) {
            if(!!this.audioObject) {
                if(this.audioObject.src === track.preview_url && this.status === "playing") {
                    return "fa fa-pause";
                } else {
                    return "fa fa-play";
                }
            } else {
                return "fa-fa-play";
            }
        };

        stopTrack() {
            if(!!this.audioObject) {
                this.audioObject.pause();
            }
        };

        changeStatus(track, album) {
            this.StarService.click(track, album);
        }

        changeClass(track) {
            if(this.StarService.isFavourite(track)) {
                return "yellow";
            } else {
                return "grey";
            }
        };

        orderUp() {
            this.tracks = this.ApiService.orderUp(this.tracks);
        }

        orderDown() {
            this.tracks = this.ApiService.orderDown(this.tracks);
        }
}
