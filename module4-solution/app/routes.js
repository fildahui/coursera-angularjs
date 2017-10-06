(function () {
    'use strict';

    angular
        .module('MenuApp')
        .config(appConfig);

    
    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('admin.shorter-url', {
                url: '/shorter-url',
                templateUrl: 'admin/views/shorter-url',
                controller: 'ShorterUrlController',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Shorter Url'
                }
            })
            .state('admin.shorter-url.new-shorten-url', {
                url: '/new-shorter-url',
                ncyBreadcrumb: {
                    label: 'New Shorten Url'
                },
                views: {
                    'toolbarView': {
                        templateUrl: 'admin/views/new-shorter-url',
                        controller: 'NewShorterUrlController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})