import 'angular-route';
import indexController from "./controllers/indexController";
import resultsController from "./controllers/resultsController";
import bandAlbumsController from "./controllers/bandAlbumsController";
import albumDetailController from "./controllers/albumDetailController";

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

$routeProvider
    .when("/", {
        templateUrl: "app/views/index.html",
        controller: indexController,
        controllerAs: 'indCtrl'
    })
    .when("/album-detail/:bandId/:albumId", {
        templateUrl: "/app/views/album-detail.html",
        controller: albumDetailController,
        controllerAs: 'albCtrl'
    })
    .when("/band-albums/:bandId", {
        templateUrl: "/app/views/band-albums.html",
        controller: bandAlbumsController,
        controllerAs: 'bandCtrl'
    })
    .when("/results/:search", {
        templateUrl: "/app/views/results.html",
        controller: resultsController,
        controllerAs: 'resCtrl'
    })
}
