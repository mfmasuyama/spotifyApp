export function bandAlbumsController($scope, $routeParams, ApiService) {
    $scope.bandAlbumsCtrl = this;

    ApiService.getAlbums($routeParams.bandId)
        .then((response)=>{
            this.albums = response;
            console.log(response);
        });
    /*ApiService.getArtist($routeParams.bandId);*/
    // console.log($scope.algo);
}
