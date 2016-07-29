var lrcApp = angular.module('lrcApp', ['ngRoute']);

lrcApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/main.html',
            controller : 'mainController'
        })

        // .when('/show', {
        //     templateUrl : 'views/show.html',
        //     controller : 'showController'            
        // })
});


