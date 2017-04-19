const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const CriminalsShowsComponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminalsShow', CriminalsShowsComponent);
