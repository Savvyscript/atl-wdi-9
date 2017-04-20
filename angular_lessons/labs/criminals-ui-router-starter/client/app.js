const angular = require('angular');
require('angular-ui-router');

angular
<<<<<<< HEAD
     .module('criminals', ['ui.router'])
     .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
    	.state('home', {
	        url:'/',
	        template: '<home></home>'
	        // template: '<h1><home></h1><a ui-sref="home">About</a>'
	    })
	    .state('about', {
	        url:'/about',
	        // template: '<about></about>'
	        template: '<h1><About></h1><a ui-sref="home">Home</a>'
	    })
	    .state('criminals', {
	    	url: '/criminals',
	    	template: "<criminals></criminals>"
	    })	
	    .state('criminalsShow', {
	    	url: '/criminals/:criminalId',
	    	template: '<criminals-show></criminals-show>'
	    .state('/usersedit', {
	    	url:  '/usersedit',
	    	tempate: '<criminals-new></criminals-new>'
	      }	

	    });

    $urlRouterProvider.otherwise('/');
} 
=======
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
