(function(){

  angular.module('app').controller('ConsultarPessoaController', 
    ['pessoaService','$mdToast','$state', ConsultarPessoaController]
  );

  function ConsultarPessoaController(pessoaService, $mdToast,$state) {
    var vm = this;

    vm.excluir = excluir;

    vm.dados = [];

    pessoaService.consultar().then(function abc(dados) {
        vm.dados = [].concat(dados.data);
    });

    function excluir(item){
      $mdToast.show($mdToast.simple().content("Excluido com sucesso!").hideDelay(2000).position('top right'));
      $state.go('pessoa.consultar');
      vm.dados.pop();
    }
  }

})();
