'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute',
                        'ui.bootstrap'])
    .controller('WebShopCtrl', function ($rootScope, $scope, $modal) {

        $rootScope.isLoggingRequired = true;
        $scope.registerUser = function() {
            
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'directives/register/register.html',
                controller: 'RegisterUserCtrl'
            });

        }

    })
    .directive('login', function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/login/login.html'
        };
    });
