(function () {
    'use strict';

    angular
        .module('MenuApp')
        .config(appConfig);

    
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'app/controllers/categories.template.html',
                controller: 'CategoriesController',
                controllerAs: 'CatCtrl',
                resolve: {
                    categories: ['MenuDataService', function (service){
                        return service.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/{category}/items',
                templateUrl: 'app/controllers/items.template.html',
                controller: 'ItemsController',
                controllerAs: 'ItemsCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, service){
                        return service.getItemsForCategory($stateParams.category);
                    }]
                }
            });
    }
})();