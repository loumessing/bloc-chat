(function () {
  function ModalCtrl($uibModal, $uibModalInstance) {

    this.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modalInstance',
        size: 'sm'
      });
      modalInstance.result.then(function(room) {
        Room.add(room);
        console.log(Room.all);
      })
    }
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', ModalCtrl])
})();
