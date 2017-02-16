export default class {

    constructor(
        $routeParams,
        $location,
        ApiService
    ) {

        this.location = $location;
        this.routeParams = $routeParams;

        ApiService.getAlbums($routeParams.bandId)
        .then((response) => {
            this.albums = response;
        });

        ApiService.getArtist($routeParams.bandId)
        .then((response) => {
            this.artist = response;
        });

    }

    toIndex() {
        this.location.path("/");
    };

    toResults() {
        this.location.path("/results/" + this.search);
    };

    toAlbumDetail(albumId) {
        this.location.path("/album-detail/" +  this.routeParams.bandId + "/" + albumId);
    };

    backToResults() {
        this.location.path("/results/" + this.artist.name);
    };
}
