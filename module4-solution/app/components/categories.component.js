(function() {
    'use strict';

    angular
        .module('MenuApp')
        .component('categories', {
            templateUrl: '',
            controller: categoriesComponentController,
            bindings: {
                categories: '<'
            }
        });

    function categoriesComponentController() {
        var $ctrl = this;

        $ctrl.$onInit = function () {

        };

        $ctrl.$doCheck = function () {

        };
    }
    
})();