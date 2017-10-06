(function() {
    'use strict';

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: '',
            controller: itemsComponentController,
            bindings: {
                items: '<'
            }
        });

    function itemsComponentController() {
        var $ctrl = this;
        
        $ctrl.$onInit = function () {

        };

        $ctrl.$doCheck = function () {

        };
    }

})();