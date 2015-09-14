(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .controller('EmailFormController', ['$scope', '$http', function($scope, $http) {
      $scope.submit = function() {
        console.log('hello');
        $http.post('http://localhost:3000/api/email', {name: $scope.name, email: $scope.email, text: $scope.text })

        }
      }])

    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: true
    });

    $locationProvider.hashPrefix('!');
  }


  function run() {
    FastClick.attach(document.body);
  }


})();
