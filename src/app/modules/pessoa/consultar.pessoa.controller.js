(function(){
  
  angular.module('pessoa').controller('ConsultarPessoaController', 
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
      pessoaService.excluir(item.id).then(function abc(dados) {
        $mdToast.show($mdToast.simple().content("Excluido com sucesso!").hideDelay(2000).position('top right'));
        pessoaService.consultar().then(function abc(dados) {
          vm.dados = [].concat(dados.data);
          $state.go('pessoa.consultar');
        });
      });
    }
  }
  
})();
