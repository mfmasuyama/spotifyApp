export function resultsController($scope, $routeParams, ApiService) {
    $scope.resultsCtrl = this;

    this.getArtists = function() {
        ApiService.getArtists($scope.resultsCtrl.search)
        .then(function(response) {
            this.artists = response;
        }.bind(this));
    }

    // Get artists from index
    ApiService.getArtists($routeParams.searchData)
    .then(function(response) {
        this.artists = response;
        console.log($routeParams.searchData);
        console.log(response);
    }.bind(this));

}
