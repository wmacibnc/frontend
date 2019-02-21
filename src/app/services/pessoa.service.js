(function(){
  'use strict';

  angular.module('app').service('pessoaService', ['$q',consultar]);

  function consultar($q){
    var todos = [
      {nome: 'João da Silva Lima Pereira da Costa', dataNascimento: new Date()},
      {nome: 'Pedro da Costa Henrique Franco Franquês', dataNascimento: new Date()},
      {nome: 'Fernanda Lima', dataNascimento: new Date()}
    ];

    return {
      consultar : function() {
        return $q.when(todos);
      }
    };
  }
})();
