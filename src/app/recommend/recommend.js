angular.module( 'ngBoilerplate.recommend', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'recommend', {
    url: '/recommend',
    views: {
      "main": {
        templateUrl: 'recommend/recommend.tpl.html'
      }
    },
    data:{ pageTitle: 'Our recommendation' }
  });
})

.controller( 'AccordionCtrl', function( $scope ) {
  $scope.oneAtATime = true;

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
