angular.module( 'ngBoilerplate.add', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'add', {
    url: '/add',
    views: {
      "main": {
        templateUrl: 'add/add.tpl.html'
      }
    },
    data:{ pageTitle: 'Add Your Courses' }
  });
})

.controller( 'AddCtrl', function AboutCtrl( $scope ) {
  $scope.myClasses = [{"name": "Hello World"}];
  $scope.warning = false;
  $scope.addClass = function(name) {
    if (name === undefined || name.length === 0) {
      $scope.warning = true;
    } else {
      $scope.myClasses.push({"name":name});
      $scope.warning = false;
    }
  };

  $scope.removeAllClasses = function() {
    $scope.myClasses = [];
  };

  $scope.removeClass = function(name) {
    $scope.myClasses.forEach(function (p) {
      if (p.name === name) {
        var index = $scope.myClasses.indexOf(p);
        $scope.myClasses.splice(index, 1);
      }
    });
  };
});
