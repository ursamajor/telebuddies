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



.service('submitService', function($http){
  this.submitClasses = function(url, obj) {
    return $http.post(url, obj);
  };
})


.controller( 'AddCtrl', function AboutCtrl( $scope, $location, submitService) {
  $scope.myClasses = [{"name": "CS61A"}, {"name": "CS61B"}, {"name": "CS61C"}];
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


  $scope.submit = function() {
    if ($scope.myClasses.length === 0) {
      $scope.warning = true;
    } else {
      $scope.warning = false;
      submitService.submitClasses('/angular_query', $scope.myClasses).then(function(promise) {
          console.log(promise.data);
        }
      );
      $location.path('/recommend');
    }
  };

});
