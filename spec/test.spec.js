describe("Album Detail Controller", function() {

// beforeEach(module('App'));
  beforeEach(module("App", ["ngRoute","ngStorage"]));
  var $controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    var $scope = {};
    var controller = $controller('albumDetailController', { $scope: $scope });
  }));
  it('dyfgkahsdad', function() {
     controller.tracks = [{duration_ms: 1}, {duration_ms: 20}, {duration_ms: 90}, {duration_ms: 5}];
     controller.orderUp();
     var result = [{duration_ms: 1}, {duration_ms: 5}, {duration_ms: 20}, {duration_ms: 90}];
      expect(controller.tracks).toEqual(result);
    //  $scope.password = 'longerthaneightchars';
    //  $scope.grade();
    //  expect($scope.strength).toEqual('strong');
   });




});
