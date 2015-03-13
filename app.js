angular.module('EmpListApp',[
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

    // Page and url states setup, router & templates
    $stateProvider
      .state("home",{
        url: "/",
        templateUrl: "views/home/home.html",
        controller: "HomeCtrl"
      });

    // If no State found redirect to home
    $urlRouterProvider.otherwise('/');

  });
