export function indexController($scope, $location, ApiService) {
    $scope.indexCtrl = this;

    this.search = function() {
        $location.path("/results/" + $scope.indexCtrl.searchData);
    }.bind(this);
}
