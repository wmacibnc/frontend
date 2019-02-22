(function(){
  'use strict';

  angular.module('app').service('pessoaService', ['$http','api', pessoaService]);

  function pessoaService($http, api){

  const base = api + '/pessoa';

  function consultar(){
    return $http.get(base + '/consultar');
  }

  function salvar(obj){
    return $http.post(base + '/salvar', obj);
  }

  function excluir(id){
    return $http.delete(base + '/excluir', {params: {numeroPessoa:id}});
  }

  return {
    consultar : consultar,
    salvar: salvar,
    excluir: excluir
  };
  
}

  
})

();