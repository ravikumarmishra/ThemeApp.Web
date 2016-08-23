(function () {
    'use strict';

    angular.module('ThemeApp', ['ngRoute', 'ngAnimate']);
    angular.module('ThemeApp').config(function ($routeProvider) {
        $routeProvider.

        when('/', {
            templateUrl: '/Core/Partials/adminPannel.html',
            controller: 'adminPannelController'
       
        });
    });

})();

