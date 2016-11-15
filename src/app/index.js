import {routes} from "./routes";
import {ApiService} from "./services";
import {indexCtrl} from "./controllers/indexController";
import {resultsController} from "./controllers/resultsController";
import {bandAlbumsController} from "./controllers/bandAlbumsController";
import {albumDetailController} from "./controllers/albumDetailController";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService", ['$http', ApiService])
.controller('resultsCtrl', ['$scope', "ApiService", resultsController])
.controller('bandAlbumsCtrl', ['$scope', '$routeParams', "ApiService", bandAlbumsController])
.controller('albumDetailCtrl', ['$scope', '$routeParams', 'ApiService', albumDetailController]);
