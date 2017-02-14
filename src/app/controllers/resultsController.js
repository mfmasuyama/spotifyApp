export default class {

    constructor(
        $scope,
        $routeParams,
        $location,
        ApiService
    ) {

    this.artists = [];

    $scope.resCtrl.getArtists = function() {        debugger;
        ApiService.getArtists($scope.resCtrl.search)
        .then((response) => {
            console.log(response);
            this.artists = response;
        });
    }

    ApiService.getArtists($routeParams.search)
    .then((response) => {
        debugger;
        this.artists = response;
    });

    this.toIndex = function() {
        console.log("entro a toIndex");
        $location.path("/");
    };

    $scope.toBandAlbums = function(albumId) {
        $location.path("/band-albums/" + albumId);
    };

    }
}
