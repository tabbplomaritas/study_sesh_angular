"use strict";

console.log("quote list comp connected");


const quoteList = {
  bindings: {
    quote: "<"
  },

  template: `
      <section class="quote">
        <p> "{{ $ctrl.quote.quote }}"</p>
        <p>  ~{{ $ctrl.quote.author }} </p>
        <button class="button_faves" ng-click="$ctrl.addToFaves($ctrl.quote, $event);">+</button>
      </section>

  `, 

  controller: ["QuoteService", function(QuoteService){
    const vm = this;
    vm.addToFaves = (quote, $event) => {  
      angular.element($event.target).html("<p class='checkmark'>&#10003</p>");
      QuoteService.addToFaves(quote);

    };
  }]
};

angular
  .module("App")
  .component("quoteList", quoteList);