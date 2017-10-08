(function() {
    'use strict';

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'app/components/items.template.html',
            controller: itemsComponentController,
            bindings: {
                list: '<'
            }
        });

    function itemsComponentController() {
        var $ctrl = this;

        $ctrl.getPrice = getPrice;
        $ctrl.getPortionSize = getPortionSize;

        function getPrice(item) {
            if (!item) {
                return '';
            }

            if (item.price_small) {
                return parseFloat(item.price_small).toFixed(2);
            }

            if (item.price_large) {
                return parseFloat(item.price_large).toFixed(2);
            }
            
            return '';
        }

        function getPortionSize(item) {
            if (!item) {
                return '';
            }

            if (item.small_portion_name) {
                return item.small_portion_name;
            }

            if (item.large_portion_name) {
                return item.large_portion_name;
            }
            
            return '';
        }
    }

})();