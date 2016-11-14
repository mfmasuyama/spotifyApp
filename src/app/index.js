import {routes} from "./routes";
import {ApiService} from "./services";
import {resultsController} from "./controller/resultsController";

angular
.module("App", ["ngRoute"])
.config(routes)
.service("ApiService",['$http', ApiService])
.controller('resultsCtrl', ['$scope', '$http', "ApiService", resultsController]);
