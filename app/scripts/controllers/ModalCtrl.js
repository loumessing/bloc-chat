(function () {
  function ModalCtrl($uibModal, Room) {

    this.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modalInstance',
        size: 'sm'
      });
      console.log('is this working?');
      
      modalInstance.result.then(function(room) {
        Room.add(room);
        console.log(Room.all);
      });
    };
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
