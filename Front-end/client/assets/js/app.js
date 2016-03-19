(function() {
    'use strict';

    angular.module('application', ['ui.router', 'ngAnimate', 'foundation', 'foundation.dynamicRouting', 'foundation.dynamicRouting.animations'])
        .controller('HomeController', HomeController)
        .config(config)
        .run(run);

    config.$inject = ['$urlRouterProvider', '$locationProvider'];
    HomeController.$inject = ['$scope', '$stateParams', '$state', '$controller'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled:false,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }

})();
