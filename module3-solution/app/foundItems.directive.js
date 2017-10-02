(function() {
    'use strict';

    angular
        .module('NarrowItDownApp')
        .directive('foundItems', foundItems);

    foundItems.$inject = ['$compile'];

    function foundItems($compile) {
        return {
            restrict: 'E',
            templateUrl: 'app/foundItems.template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            bindToController: true,
            controller: foundItemsController,
            controllerAs: 'foundCtrl'
        };
    }

    foundItemsController.$inject = ['$scope'];
    function foundItemsController($scope) {
        var foundCtrl = this;

        foundCtrl.removeItem = removeItem;
        foundCtrl.getPrice = getPrice;
        foundCtrl.getPortionSize = getPortionSize;

        function removeItem(indexToRemove) {
            if (foundCtrl.onRemove) {
                foundCtrl.onRemove({ index: indexToRemove });
            }
        }

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