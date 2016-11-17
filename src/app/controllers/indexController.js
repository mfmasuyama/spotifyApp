export function indexController($scope, $location, ApiService) {
    $scope.indexCtrl = this;

    this.toResults = function() {
        $location.path("/results/" + this.search);
    }.bind(this);
}
