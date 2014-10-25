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

.controller( 'RecommendCtrl', function AboutCtrl( $scope ) {

});
