(function() {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', narrowItDownController)
        .service('MenuSearchService', menuSearchService);


    menuSearchService.$inject = ['$http', '$q'];
    function menuSearchService($http, $q) {
        return {
            getMatchedMenuItems: getMatchedMenuItems
        };

        function getMatchedMenuItems(searchTerm) {
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                })
                .then(function(result) {
                    var foundItems = [];

                    result.menu_items.forEach(function (item) {

                    });

                    resolve(foundItems);
                }, function (error) {
                    reject(error);
                });
            });
        }

    }

    narrowItDownController.$inject = ['$scope'];
    function narrowItDownController($scope, menuSearchService) {
        var ctrl = this;

        ctrl.searchTerm = '';
        ctrl.startSearch = startSearch;
        ctrl.itemsToShow = [];
        ctrl.removeItem = removeItem;


        function startSearch() {
            if (ctrl.searchTerm == '') {
                return;
            }

            menuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (results) {
                    ctrl.itemsToShow = results;
                })
        }

        function removeItem(index) {
            if (!this.itemsToShow || this.itemsToShow.length == 0 || index < 0 || index > this.itemsToShow.length) {
                return;
            }

            this.itemsToShow.splice(index, 1);
        }
    }

})();