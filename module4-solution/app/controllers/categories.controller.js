(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('CategoriesController', categoriesController);


    categoriesController.$inject = ['$scope', 'categories'];
    function categoriesController($scope, categories) {
        var CatCtrl = this;

        CatCtrl.categories = categories;
    }

})();