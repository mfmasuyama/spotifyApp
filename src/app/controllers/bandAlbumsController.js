export function bandAlbumsController($scope,$routeParams, ApiService) {
    $scope.resultsCtrl = this;

    ApiService.getAlbums($routeParams.bandId);

}
