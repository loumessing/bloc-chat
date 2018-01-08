(function(){//the middle manager between home.html (view) and room.js service
  function HomeCtrl(Room, Message, $scope, $cookies) {
      /*References Room function which lives inside of Room.js. That function creates an empty Room object, then gets all the children in rooms array, then sets that as the variable rooms, then sets that equal to the method Room.all*/
      this.room = Room.all; //method created in Room.js to list all chat rooms
      this.currentRoom = null;
      this.messages = Message.all;
      this.userName = $cookies.get('blocChatCurrentUser');
      //gets user name from text
//controller method
      this.title = "Welcome to Bloc Chat!";

      this.setRoom = function(room) {
          $scope.currentRoom = room;
          console.log(room);
          $scope.messages = Message.getByRoomId(room.$id);
          console.log(room.$id);
      };

      this.sendMessage = function(message) {
        Message.send(message, $scope.currentRoom);

        //alert(message);
        //we want to display the actual message as an alert, like an onion!
        //set this up between the data(firebase); how are we accessing the username handle?
        //build the message params/data
      };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$cookies', HomeCtrl]);

})();
