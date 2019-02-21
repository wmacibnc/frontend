(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Pessoas',
        icon: 'view_list',
        sref: 'pessoa.consultar'
      },
      {
        name: 'Cadastrar Pessoa',
        icon: 'note_add',
        sref: 'pessoa.novo'
      },
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: 'home.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: 'home.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: 'home.table'
      },
      {
        name: 'Data Table',
        icon: 'view_module',
        sref: 'home.data-table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
