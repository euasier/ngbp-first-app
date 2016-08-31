angular.module( 'ngbpFirstApp')

.factory("diagnosesService", function() {
    var diagnoses = [{"diagnosesCode": "73027","diagnosesDesc": "Unspecified osteomyelitis, ankle and foot"},
                        {"diagnosesCode": "V4365","diagnosesDesc": "Knee joint replacement"}];
 
  return {
    getAll: function() {
      return diagnoses;
    }
  };
});