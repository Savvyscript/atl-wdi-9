const angular = require('angular');
require('angular-ui-router');

angular
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
