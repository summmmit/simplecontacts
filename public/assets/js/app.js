var app = angular.module('contactsMgr', ['ngSanitize', 'mgcrea.ngStrap', 'ngResource', 'ui.router']);

app.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
            // Index page to show all the contacts
                .state('home', {
                    url: '/home',
                    templateUrl: './partials/home.html',
                    controller: 'homeCtl'
                })
                .state('add-contact', {
                    url: '/add-contact',
                    templateUrl: './partials/add.html',
                    controller: 'addCtl'
                })
                .state('contact-id', {
                    url: '/contact/{id}',
                    templateUrl: './partials/contact.html',
                    controller: 'contactCtl'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './partials/sign-in.html',
                    controller: 'signInCtl'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: './partials/register.html'
                })
                .state('forgot-password', {
                    url: '/forgot-password',
                    templateUrl: './partials/forgot-password.html',
                })

        }
    ]
);