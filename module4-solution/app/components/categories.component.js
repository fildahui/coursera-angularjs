(function() {
    'use strict';

    angular
        .module('MenuApp')
        .component('categories', {
            templateUrl: 'categories.template.html',
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