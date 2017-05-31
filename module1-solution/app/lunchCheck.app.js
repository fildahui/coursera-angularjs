(function() {

    'use strict';

    angular.module('LunchCheck', [])
        .controller('lunchCheckController', lunchCheckController);

    lunchCheckController.$inject = ['$scope'];

    function lunchCheckController($scope) {

        $scope.lunchDishes = '';
        $scope.checkMessage = '';
        $scope.messageClass = '';
        $scope.showMessage = false;
        $scope.redClass = false;
        $scope.greenClass = false;
        $scope.itemsCount = 0;

        $scope.checkLunch = function() {
            
            if ($scope.lunchDishes == '') {
                $scope.checkMessage = 'Please enter data first';
                $scope.redClass = true;
                $scope.greenClass = false;
            }
            else {
                var tokens = $scope.lunchDishes.split(',').filter(function(i) { return i.trim() != ''; });
                $scope.itemsCount = tokens.length;
                $scope.checkMessage = tokens.length < 4 ? 'Enojy!' : 'Too Much!';
                $scope.redClass = false;
                $scope.greenClass = true;
            }

            $scope.showMessage = true;
        };

        $scope.resetData = function () {
            $scope.redClass = false;
            $scope.greenClass = false;
            $scope.checkMessage = '';
            $scope.itemsCount = 0;
            $scope.showMessage = false;
        }
    }

})();