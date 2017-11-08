(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            console.log($firebaseArray(ref.orderByChild("roomId").equalTo(roomId)));
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId)); //the first method takes in the firebaseArray property "roomId", the second the function parameter. It's just saying "If there's a match between the property and the argument, I wanna see it"
            //now that I have $id, can pass into this method to get associated messages.
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
