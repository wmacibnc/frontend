'use strict';

angular.module('pessoa')

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

    $stateProvider
      .state('pessoa', {
      url: '/pessoa',
      templateUrl: 'app/views/main.html',
      controller: 'MainController',
      controllerAs: 'vm',
      abstract: true
    })
    .state('pessoa.consultar', {
      url: '/consultar',
      templateUrl: 'app/modules/pessoa/consultar.pessoa.html',
      controller: 'ConsultarPessoaController',
      controllerAs: 'vm',
      data: {
        title: 'Pessoas'
      }
    })
    .state('pessoa.novo', {
      url: '/novo',
      templateUrl: 'app/modules/pessoa/novo.pessoa.html',
      controller: 'CadastrarPessoaController',
      controllerAs: 'vm',
      data: {
        title: 'Cadastrar Pessoa'
      },
      params: {
        isDetalhar: false,
        pessoa: {}
      }
    });  
  });