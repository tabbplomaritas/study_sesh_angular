"use strict";

const quoteFaves = {
  template: `
  <h2>My saved fave's</h2>
  <button ng-click="$ctrl.backToList();" >Back to random quotes</button>
  <section class="quote" ng-repeat="quote in $ctrl.faves">
    <p>"{{quote.quote}}"</p>
    <p>~{{quote.author}}</p>
  </section>
  `, 

  controller: ["QuoteService", function(QuoteService){
    const vm = this;
    vm.faves=QuoteService.getFaves();

    vm.backToList = () =>{
      QuoteService.backToList();
    }
  }]
};

angular
.module("App")
.component("quoteFaves", quoteFaves);