export function resultsController($scope, $routeParams, $location, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = () => {
        ApiService.getArtists($scope.resultsCtrl.search)
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
