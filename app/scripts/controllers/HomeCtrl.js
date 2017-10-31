(function(){
  function HomeCtrl(Room){
    this.rooms = Room.all;
    this.greeting = "Welcome to Bloc Chat";
  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
