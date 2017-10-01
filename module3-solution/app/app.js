(function() {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .service('MenuSearchService', menuSearchService)
        .controller('NarrowItDownController', narrowItDownController);


    menuSearchService.$inject = ['$http', '$q'];
    function menuSearchService($http, $q) {

        function getMatchedMenuItems(searchTerm) {
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                })
                .then(function(result) {
                    var foundItems = [];

                    result.data.menu_items.forEach(function (item) {
                        if (item.description.search(searchTerm) >= 0) {
                            foundItems.push(angular.copy(item));
                        }
                    });

                    resolve(foundItems);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return {
            getMatchedMenuItems: getMatchedMenuItems
        };

    }

    narrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function narrowItDownController($scope, MenuSearchService) {
        var ctrl = this;

        ctrl.searchTerm = '';
        ctrl.startSearch = startSearch;
        ctrl.itemsToShow = [];
        ctrl.removeItem = removeItem;


        function startSearch() {
            if (ctrl.searchTerm == '') {
                return;
            }

            ctrl.isLoading = true;
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (results) {
                    ctrl.itemsToShow = results;
                    ctrl.isLoading = false;
                }, function(error) {
                    console.log(error);
                    ctrl.isLoading = false;
                });
        }

        function removeItem(index) {
            if (!this.itemsToShow || this.itemsToShow.length == 0 || index < 0 || index > this.itemsToShow.length) {
                return;
            }

            this.itemsToShow.splice(index, 1);
        }
    }

})();