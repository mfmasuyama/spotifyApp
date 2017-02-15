export default class {

    constructor(
        $routeParams,
        $location,
        ApiService
    ) {

    this.getArtists = () => {
        ApiService.getArtists(this.search)
        .then((response) => {
            this.artists = response;
        });
    }

    ApiService.getArtists($routeParams.search)
    .then((response) => {
        this.artists = response;
    });

    this.toIndex = () => {
        $location.path("/");
    };

    this.toBandAlbums = (albumId) => {
        $location.path("/band-albums/" + albumId);
    };

    }
}
