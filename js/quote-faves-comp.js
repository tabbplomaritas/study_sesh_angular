"use strict";

const quoteFaves = {
  template: `
  <h2>My saved fave's</h2>
  <section class="quote" ng-repeat="quote in $ctrl.faves">
    <p>"{{quote.quote}}"</p>
    <p>~{{quote.author}}</p>
  </section>
  `, 

  controller: ["QuoteService", function(QuoteService){
    const vm = this;
    vm.faves=QuoteService.getFaves();
  }]
};





angular
.module("App")
.component("quoteFaves", quoteFaves);