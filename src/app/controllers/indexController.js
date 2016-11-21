export function indexController($scope, $location, ApiService, StarService) {
    $scope.indexCtrl = this;

    this.toResults = function() {
        $location.path("/results/" + this.search);
    }.bind(this);

    // StarService.getFavourites()
    // .then(function(response) {
    //     this.favourites = response;
    // }.bind(this));

    this.favourites = StarService.getFavourites();
}
