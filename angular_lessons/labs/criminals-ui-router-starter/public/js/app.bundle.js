/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {

  const vm = this;

  vm.current = {};
  vm.loadCurrentCriminal = loadCurrentCriminal;

  activate();

  function activate() {
    loadCurrentCriminal();
  }

  function loadCurrentCriminal() {
    console.log($stateParams);
    CriminalsService.loadCurrent($stateParams.criminalId).then(function resolve(response) {
      vm.current = response.data.criminal;
    });
  }
}
module.exports = CriminalsShowController;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;

	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}

	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService.loadAll().then(function resolve(response) {
			vm.criminals = response.data.criminals;
			vm.loading = false;
		});
	}
}

module.exports = CriminalsController;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

HomeController.$inject = [];

function HomeController() {
	const vm = this;
}

module.exports = HomeController;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (33:5)\n\n\u001b[0m \u001b[90m 31 | \u001b[39m\t      }\t\n \u001b[90m 32 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 | \u001b[39m\t    })\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m\t    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 34 | \u001b[39m\n \u001b[90m 35 | \u001b[39m    $urlRouterProvider\u001b[33m.\u001b[39motherwise(\u001b[32m'/'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 36 | \u001b[39m} \u001b[0m\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const controller = __webpack_require__(0);
const template = __webpack_require__(11);

const CriminalsShowsComponent = {
	controller: controller,
	template: template
};

angular.module('criminals').component('criminalsShow', CriminalsShowsComponent);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const controller = __webpack_require__(1);
const template = __webpack_require__(12);

const CriminalsComponent = {
	controller: controller,
	template: template
};

angular.module('criminals').component('criminals', CriminalsComponent);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const controller = __webpack_require__(2);
const template = __webpack_require__(13);
const HomeComponent = {
  controller: controller,
  template: template
};

angular.module('criminals').component('home', HomeComponent);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

angular.module('criminals').service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;

	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div>\n     Name: {{ $ctrl.current.name}}\n\t<br>\n    Crime: {{ $ctrl.current.crime}}\n</div>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"criminals\">\n\t<li ng-show=\"$ctrl.loading\">\n\t\t<strong>Loading...</strong>\n\t</li>\n\n  <li ng-hide=\"$ctrl.loading\" ng-repeat=\"criminal in $ctrl.criminals\">\n    <strong>{{criminal.name}}</strong>\n\n\t\t<!-- Reference for Gerry -->\n    <!-- <em>{{criminal.crime}}</em> -->\n    \n<!--     <span ng-if=\"criminal.status\" class='status {{criminal.status | lowercase }}'>{{criminal.status | uppercase}}</span>\n -->\n    <a ui-sref=\"criminalsShow({criminalId: criminal._id})\">Click to see crimes</a>\n\n  </li>\n</ul>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\"\n   <h1>Home</h1>\n   <h1>  </h1>\n</div>   \n";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(0);
__webpack_require__(5);
__webpack_require__(1);
__webpack_require__(6);
__webpack_require__(2);
module.exports = __webpack_require__(7);


/***/ })
/******/ ]);