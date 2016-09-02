angular.module( 'ngbpFirstApp.addeditPatient', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'addeditPatient', {
    url: '/addeditPatient?id',
    views: {
      "main": {
        controller: 'AddEditPatientCtrl',
        templateUrl: 'addeditPatient/addeditPatient.tpl.html'
      }
    },
    data:{ pageTitle: 'Patient' }
  });
})

.controller( 'AddEditPatientCtrl', function EditPatientCtrl( $scope, $stateParams, patientsService, diagnosesService, proceduresService ) {   
    $scope.patient = {};
    $scope.patient.skills = [];
    $scope.patient.treatment = [];
    $scope.newSkill = "";
    $scope.newdrugNameBrand = "";
    $scope.newdrugNameGeneric = "";
    $scope.newProcedureCode = "";
    $scope.newDiagnosesCode = "";
//    $scope.diagnoses = diagnosesService.getAll();
//    $scope.procedures = proceduresService.getAll();
    diagnosesService.getAll().then(function(data) {$scope.diagnoses =  data;},function (error) {alert("Error downloading diagnoses");});
    proceduresService.getAll().then(function(data) {$scope.procedures =  data;},function (error) {alert("Error downloading procedures");});
    var originalPatient;
    var newPatient = ($stateParams.id === undefined);

    if(!newPatient) {
      // Edit Patient implies that we need to obtain data from one patient
      originalPatient = patientsService.getById($stateParams.id);
      $scope.patient = originalPatient;
      $scope.originalPatient = angular.copy(originalPatient); // Cancel -> Undo model changes
    }

    $scope.cancelPatientSave = function () {
        // Undo every change made through the UI
        angular.copy($scope.originalPatient, $scope.patient);
    };

    $scope.addSkill = function () {
        $scope.patient.skills.push({"linkedInSkill": "" + $scope.newSkill});
    };

    $scope.deleteSkill = function (skill) {
      for(index=0;index<$scope.patient.skills.length;index++) {
        if(skill == $scope.patient.skills[index].linkedInSkill) {
          $scope.patient.skills.splice(index,1);
          break;
        }  
      }
    };

    $scope.addTreatment = function () {
      var newProcCode = "";
      var newProcDesc = "";
      var newDiagCode = "";
      var newDiagDesc = "";

      if($scope.newProcedureCode !== undefined) {
        newProcCode = $scope.newProcedureCode;
        for(index=0;index<$scope.procedures.length;index++) {
          if(newProcCode == $scope.procedures[index].procedureCode) {
            newProcDesc = $scope.procedures[index].procedureDesc;
            break;
          }
        }
      }

      if($scope.newDiagnosesCode !== undefined) {
        newDiagCode = $scope.newDiagnosesCode;
        for(index=0;index<$scope.diagnoses.length;index++) {
          if(newDiagCode == $scope.diagnoses[index].diagnosesCode) {
            newDiagDesc = $scope.diagnoses[index].diagnosesDesc;
            break;
          }
        }
      }

      $scope.patient.treatment.push({"drugNameBrand": "" + $scope.newdrugNameBrand, 
                                      "drugNameGeneric": "" + $scope.newdrugNameGeneric,
                                      "procedureCode": "" + newProcCode, 
                                      "procedureDesc": "" + newProcDesc,
                                      "diagnosesCode": "" + newDiagCode, 
                                      "diagnosesDesc": "" + newDiagDesc}
                                      );
    };

    $scope.savePatient = function () {
      if(!newPatient) {
          patientsService.update($scope.patient);
      } else {
         patientsService.insert($scope.patient);
      }
    };

})

;