(function(){
  'use strict';

  angular.module('app').service('pessoaService', ['$http', pessoaService]);

  function pessoaService($http){

  function consultar(){
    return $http.get('http://localhost:8080/pessoa/consultar');
  }

  return {
    consultar : consultar
  };
  
}

  
})

();