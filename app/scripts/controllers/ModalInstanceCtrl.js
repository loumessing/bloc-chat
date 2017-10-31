(function (){
  function ModalInstanceCtrl($uibModalInstance){
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };

    this.ok = function() {
      $uibModalInstance.close(this.room);

    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
