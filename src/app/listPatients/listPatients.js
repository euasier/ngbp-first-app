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
  // $scope.patients = patientsService.getAll();
  patientsService.getAll().then(function(data) {$scope.patients =  data;},function (error) {alert("Error downloading diagnoses");});

  $scope.deletePatient = function (id) {
    //patientsService.removeById(id);
    patientsService.removeById(id).then(function(data) {$scope.patients =  data;},function (error) {alert("Error downloading diagnoses");});
  };

});

