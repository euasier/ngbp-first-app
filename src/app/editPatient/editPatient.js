angular.module( 'ngbpFirstApp.editPatient', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'editPatient', {
    url: '/editPatient?id',
    views: {
      "main": {
        controller: 'EditPatientCtrl',
        templateUrl: 'editPatient/editPatient.tpl.html'
      }
    },
    data:{ pageTitle: 'Edit patient' }
  });
})

.controller( 'EditPatientCtrl', function EditPatientCtrl( $scope, $stateParams, patientsService ) {
    $scope.patient = patientsService.getById($stateParams.id);
})

;