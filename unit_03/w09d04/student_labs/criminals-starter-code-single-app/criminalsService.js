criminal service

angular.module('InfamousCriminals')
     .service('CriminalService', CriminalService);

     functionCriminalService() {

      var vm = this;

      vm.GetCriminals = function () {
            return $http
            .get('/criminals')
            .then(function(response) {
                 return response.data.criminials;
            });
      }
      vm.addCriminal = function() {
          return $http
            .post('/criminals'. newCriminal);
      }
      vm.deleteCr
    } 