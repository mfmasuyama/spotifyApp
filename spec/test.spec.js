// describe("Album Detail Controller", function() {
//
// // beforeEach(module('App'));
//   beforeEach(angular.mock.module("App"));
//   // beforeEach(module("App", ["ngRoute","ngStorage"]));
//   var $controller;
//   beforeEach(inject(function(_$controller_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//     var $scope = {};
//     // var controller = $controller('albumDetailController', { $scope: $scope }, $routeParams, $location, ApiService,StarService);
//     var controller = $controller('albumDetailController', ['$scope', '$routeParams', "$location", 'ApiService','StarService', albumDetailController]);
//   }));
//   it('OrderUp', function() {
//      $scope.tracks = [{duration_ms: 1}, {duration_ms: 20}, {duration_ms: 90}, {duration_ms: 5}];
//      $scope.orderUp();
//      var result = [{duration_ms: 1}, {duration_ms: 5}, {duration_ms: 20}, {duration_ms: 90}];
//       expect($scope.tracks).toEqual(result);
//    });
//
// //////////////////////////////////////////////////////////////////////
//
// // beforeEach(module('App'));
//   // beforeEach(angular.mock.module("App"));
//   // beforeEach(module("App", ["ngRoute","ngStorage"]));
//   var $controller;
//   beforeEach(inject(function(_$controller_){
//     angular.module("App", ["ngRoute", "ngDtorage"]);
//     angular.controller('albumDetailController', ['$scope', '$routeParams', "$location", 'ApiService','StarService', albumDetailController]);
//   }));
//   it('OrderUp', function() {
//      $scope.tracks = [{duration_ms: 1}, {duration_ms: 20}, {duration_ms: 90}, {duration_ms: 5}];
//      $scope.orderUp();
//      var result = [{duration_ms: 1}, {duration_ms: 5}, {duration_ms: 20}, {duration_ms: 90}];
//       expect($scope.tracks).toEqual(result);
//    });

//
// });

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(true).toBe(true);
//   });
// });

///////////// Ejemplo
'use strict';

describe('Service: ApiService', function() {

   var ApiService;

   beforeEach(module('App', ["ngRoute", "ngStorage", "ngMock"]));

   beforeEach(inject(function(ApiService) {
       ApiService = _ApiService_;
   }));

   it("contains spec with an expectation", function() {
     expect(true).toBe(true);
   });


});
