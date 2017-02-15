export default class {

    constructor(
        $routeParams,
        $location,
        ApiService,
        StarService) {

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

    this.toIndex = () => {
        $location.path("/");
        this.stopTrack();
    };

    this.toResults = () => {
        $location.path("/results/" + this.search);
        this.stopTrack();
    };

    this.toBandAlbums = () => {
        $location.path("/band-albums/" + this.artist.id);
        this.stopTrack();
    };

    this.backToResults = () => {
        $location.path("/results/" + this.artist.name);
        this.stopTrack();
    };

    this.playTrack = (track) => {
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

    this.changePlayPauseButton = (track) => {
        if(this.audioObject.src === track.preview_url && this.status === "playing") {
            return "fa fa-pause";
        } else {
            return "fa fa-play";
        }
    };

    this.stopTrack = () => {
        if(typeof this.audioObject !== "undefined") {
            this.audioObject.pause();
        }
    };

    this.changeStatus = (track, album) => {
        StarService.click(track, album);
    }

    this.changeClass = (track) => {
        if(StarService.isFavourite(track)) {
            return "yellow";
        } else {
            return "grey";
        }
    };

    this.orderUp = () => {
        this.tracks = ApiService.orderUp(this.tracks);
    }

    this.orderDown = () => {
        this.tracks = ApiService.orderDown(this.tracks);
    }

    }
}
