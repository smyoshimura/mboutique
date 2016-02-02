// Creating route module
var routeApp = angular.module("routeApp", ["ngRoute"]);
// Config the routes
routeApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'welcome.html',
            controller: 'welcomeController'
        })
        .when('/our-macarons',{
            templateUrl: 'our_macarons.html',
            controller: 'macaronsController'
        })
        .when('/gifts-parties',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftsController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            contorller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        })
});

// Controllers
routeApp.controller('welcomeController', function($scope) {

});

routeApp.controller('macaronsController', function($scope){

});

routeApp.controller('giftsController', function($scope){

});

routeApp.controller('contactController', function($scope){

});