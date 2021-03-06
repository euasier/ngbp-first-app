angular.module( 'ngbpFirstApp', [
  'templates-app',
  'templates-common',
  'ngbpFirstApp.listPatients',
  'ngbpFirstApp.addeditPatient',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/listPatients' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngbpFirstApp' ;
    }
  });
});
