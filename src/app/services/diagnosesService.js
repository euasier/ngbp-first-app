angular.module( 'ngbpFirstApp')

.factory("diagnosesService", function($q, $http) {
 
  return {
    getAll: function() {
      var deferred = $q.defer();

      $http.get('getAllDiagnoses').success(function( data ) {
            deferred.resolve(data);
        } )
        .error(function (error) {
          deferred.reject(error);
         });
      // return a promise to update the UI
      return deferred.promise;
    }
  };
});