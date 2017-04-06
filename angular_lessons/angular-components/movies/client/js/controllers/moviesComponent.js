let reviewsTemplate = require(__dirname + '/movies.html');
let reviewsController = require(__dirname + '/movies.controller.js');

let MoviesComponent = {
    template: reviewsTemplate,
    controller: reviewsController
};

angular.module('moviesApp').component('movies', MoviesComponent);
