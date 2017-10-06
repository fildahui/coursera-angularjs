(function() {
    'use strict';

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'items.template.html',
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