export function indexController($scope, $location, ApiService, StarService) {
    $scope.indexCtrl = this;

    this.toResults = () => {
        $location.path("/results/" + this.search);
    };

    this.favourites = StarService.getFavourites();
}
