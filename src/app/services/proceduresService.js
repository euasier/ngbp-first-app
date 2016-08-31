angular.module( 'ngbpFirstApp')

.factory("proceduresService", function() {
       var procedures = [{"procedureCode": "8771", "procedureDesc": "Computerized axial tomography of kidney"}, 
                        {"procedureCode": "3855", "procedureDesc": "Ligation and stripping of varicose veins, other thoracic vessels"}];
  return {
    getAll: function() {
      return procedures;
    }
  };
});
