import 'ngstorage';
import {routes} from "./routes";
import ApiService from "./services/api";
import StarService from "./services/star";


angular
.module("App", ["ngRoute","ngStorage"])
.config(routes)
.service("ApiService", ['$http', ApiService])
.service("StarService", StarService)

// .controller('indexCtrl', ['$scope', '$location', 'ApiService', "StarService", indexController])
// .controller('resultsCtrl', ['$scope', '$routeParams', "$location","ApiService", resultsController])
// .controller('bandAlbumsCtrl', ['$scope', '$routeParams', "$location", "ApiService", bandAlbumsController])
// .controller('albumDetailCtrl', ['$scope', '$routeParams', "$location", 'ApiService','StarService', albumDetailController]);
