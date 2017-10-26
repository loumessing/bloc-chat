(function() {
  function Room($firebaseArray) {
 // var ref = new firebase('https://lm-bloc-chat.firebaseio.com/rooms');
  var Room = {};
  var ref = firebase.database().ref().child("rooms");
  var rooms = $firebaseArray(ref);

 Room.all = rooms;
 return Room;

  }
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
