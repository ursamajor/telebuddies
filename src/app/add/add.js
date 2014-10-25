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
  $scope.myClasses = [];
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
});
