"use strict";

angular
  .module("App", ["ngRoute"])
  .config(($routeProvider) =>{
    $routeProvider
    .when("/quote-main", {
      template: "<quote-main></quote-main>"
    })
    .when("/quote-list", {
      template: "<quote-list></quote-list>"
    })
    .when("/quote-faves", {
      template: "<quote-faves></quote-faves>"
    })
    .otherwise({ 
      redirectTo: "/quote-main"})
  });