export default class {

    constructor(
        $routeParams,
        $location,
        ApiService
    ) {

        this.location = $location;
        this.ApiService = ApiService;

        ApiService.getArtists($routeParams.search)
        .then((response) => {
            this.artists = response;
        });

    }

    getArtists = () => {
        this.ApiService.getArtists(this.search)
        .then((response) => {
            this.artists = response;
        });
    }

    toIndex = () => {
        this.location.path("/");
    };

    toBandAlbums = (albumId) => {
        this.location.path("/band-albums/" + albumId);
    };
}
