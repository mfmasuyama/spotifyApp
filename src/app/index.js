import 'ngstorage';
import {routes} from "./routes";
import {ApiService} from "./services";
import {StarService} from "./services/star";
import {indexController} from "./controllers/indexController";
import {resultsController} from "./controllers/resultsController";
import {bandAlbumsController} from "./controllers/bandAlbumsController";
import {albumDetailController} from "./controllers/albumDetailController";

angular
.module("App", ["ngRoute","ngStorage", "ngMock"])
.config(routes)
.service("ApiService", ['$http', ApiService])
.service("StarService", ['$localStorage', StarService])
.controller('indexCtrl', ['$scope', '$location', 'ApiService', "StarService", indexController])
.controller('resultsCtrl', ['$scope', '$routeParams', "$location","ApiService", resultsController])
.controller('bandAlbumsCtrl', ['$scope', '$routeParams', "$location", "ApiService", bandAlbumsController])
.controller('albumDetailCtrl', ['$scope', '$routeParams', "$location", 'ApiService','StarService', albumDetailController]);
