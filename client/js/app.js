(function () {
  'use strict';
  
  var app = angular
    .module('giftCodeApp', ['ngRoute', 'ui.router', 'ngResource', 'lbServices', 'giftCode'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
          .state('input', {
            url: '/',
            templateUrl: 'www/input.html',
            controller: 'InputCtrl'
          })
          .state('add', {
            url: '/admin/add-code',
            templateUrl: 'www/add.html',
            controller: 'AddCtrl'
          })
      }])
  
})();
