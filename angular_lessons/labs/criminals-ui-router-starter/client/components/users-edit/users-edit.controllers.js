UsersEditControllers.$inject = ['CriminalsService'];

function UsersEditController(CriminalsService) {
	const vm = this;


	vm.usersedit = [];
	vm.loading = true;

	