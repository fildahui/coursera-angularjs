(function() {
    'use strict';

    angular
        .module('data')
        .service('MenuDataService', menuDataService);

    
    menuDataService.$inject = ['$http', '$q'];

    function menuDataService($http, $q) {
        return {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory
        };

        function getAllCategories() {
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/categories.json'
                })
                .then(function(result) {
                    resolve(result.data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        function getItemsForCategory(categoryName) {
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryName
                })
                .then(function (result) {
                    resolve(result.data.menu_items);
                }, function (error) {
                    reject(error);
                });
            });
        }
    }


})();