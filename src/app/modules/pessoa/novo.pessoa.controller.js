(function(){
  
  angular.module('pessoa').controller('CadastrarPessoaController', 
  ['pessoaService','$http', '$state','$mdToast', CadastrarPessoaController]
  );
  
  function CadastrarPessoaController(pessoaService, $http, $state, $mdToast) {
    var vm = this;
    
    // Parametros
    var parametros = $state.params;
    vm.pessoa = parametros.pessoa || {};
    vm.isDetalhar = parametros.isDetalhar || false;
    
    // Metodos
    vm.obterCep = obterCep;
    vm.salvar = salvar;
    
    // Variaveis
    vm.dados = [];
    
    function obterCep(){
      if(vm.endereco.cep && vm.endereco.cep.length == 8){
        $http({
          method: 'GET',
          url: 'https://viacep.com.br/ws/'+vm.endereco.cep+'/json/'
        }).then(function successCallback(response) {
          var endereco = response.data;
          vm.endereco.cidade = endereco.localidade + "/" + endereco.uf;
          vm.endereco.bairro = endereco.bairro;
          vm.endereco.logradouro = endereco.logradouro;
          vm.endereco.complemento = endereco.complemento;
        });
      }
    }
    
    function salvar(){
      pessoaService.salvar(vm.pessoa).then(function a(res){
        $mdToast.show($mdToast.simple().content("Salvo com sucesso!").hideDelay(2000).position('top left'));
        pessoaService.consultar().then(function abc(dados) {
          vm.dados = [].concat(dados.data);
          $state.go('pessoa.consultar');
        });
      });
    }
    
  }
  
})();