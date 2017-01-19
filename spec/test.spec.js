describe("A suite is just a function", function() {
  var a;
  it("and so is a spec", function() {
    a = 4;
    expect(a).toBe(4);
  });
  it("and so fafafasdis a spec", function() {
    a = 2;
    expect(a).toBe(2);
  });
  it("and sodsfspec", function() {
    a = 2;
    expect(a).toBe(5);
  });
});

// describe('PasswordController', function() {
//   beforeEach(module('App'));
//
//   var $controller;
//
//   beforeEach(inject(function(_$controller_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//   }));
//
//   describe('$scope.grade', function() {
//     it('sets the strength to "strong" if the password length is >8 chars', function() {
//       var $scope = {};
//       var controller = $controller('PasswordController', { $scope: $scope });
//       $scope.password = 'longerthaneightchars';
//       $scope.grade();
//       expect($scope.strength).toEqual('strong');
//     });
//   });
// });
