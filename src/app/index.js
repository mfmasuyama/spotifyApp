import {routes} from "./routes";
import {ApiService} from "./services";
import {indexController} from "./controllers/indexController";
import {resultsController} from "./controllers/resultsController";
import {bandAlbumsController} from "./controllers/bandAlbumsController";
import {albumDetailController} from "./controllers/albumDetailController";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService", ['$http', ApiService])
.controller('indexCtrl', ['$scope', '$location', 'ApiService', indexController])
.controller('resultsCtrl', ['$scope', '$routeParams', "ApiService", resultsController])
.controller('bandAlbumsCtrl', ['$scope', '$routeParams', "ApiService", bandAlbumsController])
.controller('albumDetailCtrl', ['$scope', '$routeParams', 'ApiService', albumDetailController]);
