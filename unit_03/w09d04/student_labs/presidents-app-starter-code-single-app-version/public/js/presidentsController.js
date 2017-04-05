angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);



   vm.addPresident =addPresident;
   vm.all = [];
   vm.deletePresident;
   vm.loadingAll = true;
   vm.newPresident = {};

  // this.all = [
  //   {name: 'George Washington', start: 1789, end: 1797 },
  //   {name: 'John Adams', start: 1797, end: 1801 },
  //   {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  //   {name: 'James Madison', start: 1809, end: 1817 },
  //   {name: 'Joshua Quincy Kushner', start: 2021, end: 2029 },
  // // ];
  // this.addPresident = addPresident;
  // this.newPresident = {};

  activate();

  function activate() {
    loadAllPresidents();


  function addPresident(){
    console.log('Adding...');
    console.log(vm.newPresident);
  }

    function addPresident() {
    $http
         .post('/presidents', vm.newPresident)
         .then(function someName(response) {
          vm.all.push(response.data.president);
        });
         vm.newPresident = {};
      }

   function loadAllPresidents() {
    $http
        .get('/presidents')
        .then(function resolve(response) {
            vm.all = response.data.presidents;
            vm.loadingAll = false;
         }, function handleError(err) {
            vm.loadingAll = false;
   
        });  
      }
    
        function addPresident() {
        $http
          .post('/presidents', newPresident)
          .then(function addToAll(response) {
            vm.all.push(response.data.president);
            vm.newPresident = {};
          });
  }
  
      function deletePresident(president) {
        $http
          .delete('/presidents, ')
          .then(function resolve() {
          vm.all.filter(function(currentlyitteratedPresident) {
            return president._id != currentlyitteratedPresident._id;
    });
}
      
     

      


        
      
    

  






