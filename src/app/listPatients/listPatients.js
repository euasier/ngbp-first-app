angular.module( 'ngbpFirstApp.listPatients', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'listPatients', {
    url: '/listPatients',
    views: {
      "main": {
        controller: 'ListPatientsCtrl',
        templateUrl: 'listPatients/listPatients.tpl.html'
      }
    },
    data:{ pageTitle: 'List of patients' }
  });
})

.controller( 'ListPatientsCtrl', function ListPatientsCtrl( $scope, patientsService ) {
  // pending: execution of http request to obtain data
  $scope.patients = patientsService.getAll();

  $scope.deletePatient = function (id) {
      patientsService.removeById(id);
  };

});

