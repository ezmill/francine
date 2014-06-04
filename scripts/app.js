/* global app:true */
'use strict';

var app = angular.module('ffApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'BlogCtrl'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })     
      .when('/works',{
        templateUrl:'views/works.html',
        controller: 'WorksCtrl'
      })
      .when('/contact',{
        templateUrl:'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/blog',{
        templateUrl:'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    // $locationProvider.html5Mode(true);

  });

