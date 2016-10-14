"use strict";
/**
 * @ngdoc overview
 * @name gustav
 * @description Gustav shell application
 */
angular.module('gustav', [
        'angular-loading-bar',
        'ngcsas.core',
        'gustav.config', 'gustav.account', 'gustav.card', 'gustav.history', 'gustav.buildingSaving',
        'ngcsas.core.i18n', 'gustav.i18n', 'gustav.account.i18n', 'gustav.card.i18n', 'gustav.history.i18n', 'gustav.buildingSaving.i18n',

    ])
    .config(
        //Configure loading bar
        ['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }]
    )

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'gustav/partials/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    accounts: ['Account', function(Account) {
                        return Account.load();
                    }]
                }
            })
        .state('bye', {
            url: '/bye',
            templateUrl: 'gustav/partials/bye.html'
        });
    }])
    .config(['MenuProvider', function(MenuProvider) {
        MenuProvider.insert({
            icon: 'glyphicon glyphicon-home',
            url: '/home',
            title: 'gustav.MENU_ITEM'
        });
    }])
    .config(['$httpProvider', 'ENV', function($httpProvider, ENV) {
        $httpProvider.defaults.headers.common['WEB-API-key'] = ENV.apiKey;
        $httpProvider.defaults.headers.common['Authorization'] = 'Bearer ' + ENV.authToken; //jshint ignore:line
    }]);
