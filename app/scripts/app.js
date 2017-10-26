(function(){
  function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
//added some text for changes and edits; test for github
        $stateProvider
          .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
          })

          .state('rooms', {
            url: '/rooms',
            controller: 'RoomCtrl as rooms',
            templateUrl: '/templates/rooms.html'
          });
  }

  var app = angular.module("blocChat", ["firebase"]);

  app.controller("blocChat", function($scope, $firebaseObject){
    var ref = firebase.database().ref();
    //download data to local address
    $scope.data = $firebaseObject(ref);
  });

  angular
    .module('blocChat', ['ui.router', 'firebase'])
        .config(config);

})();
