import {routes} from "./routes";
import {ApiService} from "./services";
import {resultsController} from "./controllers/resultsController";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService",['$http', ApiService])
.controller('resultsCtrl', ['$scope', '$http', "ApiService", resultsController]);
