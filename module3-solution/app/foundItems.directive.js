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

        function removeItem(indexToRemove) {
            if (foundCtrl.onRemove) {
                foundCtrl.onRemove({ index: indexToRemove });
            }
        }

    }


})();