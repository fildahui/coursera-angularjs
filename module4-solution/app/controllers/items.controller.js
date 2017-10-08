(function(){
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', itemsController);

    itemsController.$inject = ['$scope', 'items', '$stateParams'];
    function itemsController($scope, items, $stateParams) {
        var ItemsCtrl = this;

        ItemsCtrl.list = items;
        ItemsCtrl.categoryName = $stateParams.category;
    }

})();