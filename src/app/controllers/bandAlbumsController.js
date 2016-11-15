export function bandAlbumsController($scope,$routeParams, ApiService) {
    $scope.resultsCtrl = this;
    this.albums = ApiService.getAlbums($routeParams.bandId);
    /*ApiService.getArtist($routeParams.bandId);*/
    console.log(this.albums);

}
