export default class {

    constructor(
        $scope,
        $routeParams,
        $location,
        ApiService
    ) {

    this.artists = [];

    this.getArtists = function() {
        ApiService.getArtists($scope.resCtrl.search)
        .then((response) => {
            console.log(response);
            this.artists = response;
        });
    }

    ApiService.getArtists($routeParams.search)
    .then((response) => {
        this.artists = response;
    });

    this.toIndex = function() {
        console.log("entro a toIndex");
        $location.path("/");
    };

    this.toBandAlbums = function(albumId) {
        $location.path("/band-albums/" + albumId);
    };

    }
}
