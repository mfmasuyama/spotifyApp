export function indexController($scope, $location, ApiService) {
    $scope.indexCtrl = this;

    this.toResults = function() {
        $location.path("/results/" + $scope.indexCtrl.search);
    }.bind(this);
}
