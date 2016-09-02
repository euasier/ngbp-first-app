angular.module( 'ngbpFirstApp')

.factory("patientsService", function($q, $http) {
	var patients;	// local copy of patients stored in DB

	// This method is the key to solve the issues between
	// HTTP asynch calls and UI update
	function deferCode(RESTcall, method, postData) {
		var deferred = $q.defer();

		if(method=="GET") {
			$http.get(RESTcall).success(function( data ) {
				patients = data;	// update data stored in service object
				deferred.resolve(data);
			})
			.error(function (error) {
				deferred.reject(error);
			});
		}
		if(method=="POST") {
			$http.post(RESTcall, postData).success(function( data ) {
				patients = data;	// update data stored in service object
				deferred.resolve(data);
			})
			.error(function (error) {
				deferred.reject(error);
			});
		}

      // return a promise to update the UI
		return deferred.promise;
	}


  return {
    getAll: function() {
		return deferCode('getallPatients', 'GET');
    },
	// for the sake of clarity and consistency I could have retrieved the patient 
	// from the DB (just like other methods) but I have a local copy "inherited" from
	// the previous project status (Angular local CRUD)
    getById: function(id) {
      var patient;

      for (index=0;index<patients.length;index++) {
        patient = patients[index];
        if(patient.id == id) {
          break;
        }
      }
      return patient;
    },
    update: function(patient) {
		delete patient._id; // attribute added by MongoDB, it needs to be deleted or the update to work (?)
		return deferCode('/updatePatientById', 'POST', patient);
    },
	generateId: function() {
		// sequential "local" id generation (MongoDB automatically adds an _id field)
		var patientId;
		var maxId = -1;

		for (index=0;index<patients.length;index++) {
			patientId = patients[index].id;
			if(patientId > maxId) {
				maxId = patientId;
			}
		}

		return ++maxId;
	},
    insert: function(patient) {
		patient.id = this.generateId();
		return deferCode('/insertPatient', 'POST', patient);

    },
    removeById: function(id) {
		return deferCode('/removePatientById/' + id, 'GET');
    }
  };
});
