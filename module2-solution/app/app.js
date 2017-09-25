(function(){

    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .service('ShoppingListCheckOffService', shoppingListCheckOffService)
        .controller('ToBuyController', toBuyController)
        .controller('AlreadyBoughtController', alreadyBoughtController);

    

    function shoppingListCheckOffService() {
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 15 },
            { name: "marshmallows", quantity: 20 },
            { name: "flavoured chips", quantity: 4 },
            { name: "chocolate bars", quantity: 8 },
            { name: "beer (cans)", quantity: 30 }
        ];
        var alreadyBoughtItems = [];

        function findItem(list, name) {
            if (!name || name == '' || !list) {
                return null;
            }

            var itemToReturn = null;
            var i = list.length - 1;
            while(i >= 0 && !itemToReturn) {
                if (list[i].name.toLowerCase() === name.toLowerCase()) {
                    itemToReturn = list[i];
                }
                i--;
            }

            return itemToReturn;
        }

        function buyItem(itemName) {
            if (!itemName || itemName == '') {
                return;
            }

            var item = findItem(toBuyItems, itemName);
            if (!item) {
                return;
            }

            toBuyItems.splice(toBuyItems.indexOf(item), 1);
            alreadyBoughtItems.push(item);

            return true;
        }

        function discardBoughtItem(itemName) {
            if (!itemName || itemName == '') {
                return;
            }

            var item = findItem(alreadyBoughtItems, itemName);
            if (!item) {
                return;
            }

            alreadyBoughtItems.splice(alreadyBoughtItems.indexOf(item), 1);
            toBuyItems.push(item);
        }
        
        return {
            toBuyItems: toBuyItems,
            alreadyBoughtItems: alreadyBoughtItems,
            buyItem: buyItem,
            discardBoughtItem: discardBoughtItem
        };
    }

    toBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function toBuyController($scope, ShoppingListCheckOffService) {
        var tbc = this;
        
        tbc.buyItem = buyItem;
        tbc.toBuyItems = ShoppingListCheckOffService.toBuyItems;
        
        function buyItem(itemName) {
            if (ShoppingListCheckOffService.buyItem(itemName)) {
                console.log('Item successfully bought: ' + itemName);
            }
        }        
    }

    alreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function alreadyBoughtController($scope, ShoppingListCheckOffService) {
        var abc = this;

        abc.discardBoughtItem = discardBoughtItem;
        abc.boughtItems = ShoppingListCheckOffService.alreadyBoughtItems;

        function discardBoughtItem(itemName) {
            if (ShoppingListCheckOffService.discardBoughtItem(itemName)) {
                console.log('Item successfully discarded: ' + itemName);
            }
        }
    }


})();