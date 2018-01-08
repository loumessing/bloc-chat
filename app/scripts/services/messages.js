(function() { //
    function Message($firebaseArray, $cookies) {
        var Message = {}; //creates open message object
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId)); //the first method takes in the firebaseArray property "roomId", the second the function parameter. It's just saying "If there's a match between the property and the argument, I wanna see it"
            //now that I have $id, can pass into this method to get associated messages.
            //need controller method to set up
            //getparamaters
                };
            Message.send = function(newMessage, currentRoom) {
                var userName = $cookies.get('blocChatCurrentUser');
                //passes new message to firebase with the userName
                var sentAt = firebase.database.ServerValue.TIMESTAMP;
                //we have the time recorded, so now we need to get all the params in one box
                var messageObj = {
                  username: userName,
                  content: newMessage,
                  sentAt: sentAt,
                  roomId: currentRoom.$id
                  //why is this happening to me?
                  //you need to build an object with the above params

                };
                messages.$add(messageObj);
                // takes all the messageObj and pushes it as the message

            };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
