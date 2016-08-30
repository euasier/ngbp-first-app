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
    var originalPatient = patientsService.getById($stateParams.id);
    $scope.patient = originalPatient;
    $scope.originalPatient = angular.copy(originalPatient);

    $scope.cancelPatientSave = function () {
        // Undo every change made through the UI
        angular.copy($scope.originalPatient, $scope.patient);
    };

    $scope.savePatient = function (id) {
        // Keep client UI model (and server DB in synch)
        patientsService.updateById(id);
    };

})

;