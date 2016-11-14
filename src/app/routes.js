import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

$routeProvider
    .when("/", {
        templateUrl: "app/views/index.html",
    })
    .when("/album-detail", {
        templateUrl: "app/views/album-detail.html"
    })
    .when("/band-albums", {
        templateUrl: "app/views/band-albums.html"
    })
    .when("/results", {
        templateUrl: "app/views/results.html"
    })
}

/*
$routeProvider.when('/view1/:param1/:param2', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
Then in your controller inject $routeParams:
.controller('MyCtrl1', ['$scope','$routeParams', function($scope, $routeParams) { var param1 = $routeParams.param1; var param2 = $routeParams.param2; //change here from param1 to param2 ... }]);
*/
