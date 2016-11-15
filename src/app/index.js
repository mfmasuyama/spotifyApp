import {routes} from "./routes";
import {ApiService} from "./services";
import {resultsController} from "./controllers/resultsController";
import {bandAlbumsController} from "./controllers/bandAlbumsController";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService", ['$http', ApiService])
.controller('resultsCtrl', ['$scope', "ApiService", resultsController])
.controller('bandAlbumsCtrl', ['$scope', '$routeParams', 'ApiService', bandAlbumsController]);
