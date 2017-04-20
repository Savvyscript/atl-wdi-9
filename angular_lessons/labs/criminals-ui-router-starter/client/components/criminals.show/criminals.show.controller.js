CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
<<<<<<< HEAD

  const vm = this;

  vm.current = {};
  vm.loadCurrentCriminal = loadCurrentCriminal;


  activate();

  function activate() {
  	loadCurrentCriminal();
  }


  function loadCurrentCriminal() {
  	console.log($stateParams);
  	CriminalsService
  	 .loadCurrent($stateParams.criminalId)
  	 .then(function resolve(response) {
  	 	vm.current = response.data.criminal;
  	 });
  }
}
  module.exports = CriminalsShowController;
=======
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
