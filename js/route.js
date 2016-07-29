var lrcApp = angular.module('lrcApp', ['ngRoute']);

lrcApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/main.html',
            controller : 'mainController'
        })

        .when('/ags', {
            templateUrl : 'views/ags.html',
            controller : 'agsController'            
        })

         .when('/fms', {
            templateUrl : 'views/fms.html',
            controller : 'fmsController'            
        })

          .when('/ncoa', {
            templateUrl : 'views/ncoa.html',
            controller : 'ncoaController'            
        })
});


