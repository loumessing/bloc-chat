(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $scope){
    $scope.ok = function(isValid) {
      if(isValid) {
      $uibModalInstance.close($scope.username);
      }
    };
  }

  angular
    .module("blocChat")
    .controller("userNameModalInstanceCtrl", ["$uibModalInstance", '$scope', userNameModalInstanceCtrl]);
})();
