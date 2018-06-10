"use strict";


const quoteMain = {

    template:
    ` 
    <button ng-click="$ctrl.showResult();">Show me some quotes!</button>
    <button><a href="#!/quote-faves">My Faves</a></button>

    <quote-list quote="$ctrl.result"></quote-list>

    `,


    controller: ["QuoteService", function(QuoteService){
      const vm = this;
      vm.result = {}; 
      vm.showResult = () => {
        QuoteService.getQuotes().then((response) => {
          vm.result = response.data;
        });
        console.log(vm.result);
      };
      
      
    }]
  };

  angular
  .module("App")
  .component("quoteMain", quoteMain);


