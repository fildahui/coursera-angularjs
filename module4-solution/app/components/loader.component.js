(function () {
    'use strict';

    angular
        .module('utils')
        .component('loader', {
            templateUrl: 'app/components/loader.template.html',
            controller: loaderComponentController,
        });
    
    loaderComponentController.$inject = ['$rootScope'];

    function loaderComponentController($rootScope) {
        var $ctrl = this;
        $ctrl.isLoading = false;

        var destroyCallback = [];

        $ctrl.$onInit = function() {
            destroyCallback.push(
                $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
                    $ctrl.isLoading = true;
                })
            );

            destroyCallback.push(
                $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    $ctrl.isLoading = false;
                })
            );

            destroyCallback.push(
                $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
                    $ctrl.isLoading = false;
                })
            );
        }

        $ctrl.$onDestroy = function () {
            destroyCallback.forEach(function (item){
                item();
            });
        }
    }
})();