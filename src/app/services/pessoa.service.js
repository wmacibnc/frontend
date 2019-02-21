(function(){
  'use strict';

  angular.module('app').service('pessoaService', ['$http', pessoaService]);

  function pessoaService($http){

  const api = 'http://localhost:8080/pessoa';

  function consultar(){
    return $http.get(api + '/consultar');
  }

  function salvar(obj){
    return $http.post(api + '/salvar', obj);
  }

  function excluir(id){
    return $http.delete(api + '/excluir', {params: {numeroPessoa:id}});
  }

  return {
    consultar : consultar,
    salvar: salvar,
    excluir: excluir
  };
  
}

  
})

();