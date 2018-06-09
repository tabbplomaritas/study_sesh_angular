"use strict";

function QuoteService($http, $location){
let finalData = {};
let faves = [];
  const getQuotes = () =>{
    return $http({
      method: 'GET', 
      url: `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10`,
      headers: {
        'X-Mashape-Key': 'EDmC1dwBLomshyapLX5EjN2RgOACp12GMLajsnZKfdsEh635ux',
        'Accept': 'application/json'
      }
    }).then((response) => {
      finalData = response;
      console.log(finalData);
      return finalData;
    });
  };

  const returnResults = () => {
    return finalData;
  };

  const addToFaves = (quote) => {
    faves.push(quote);
    console.log(faves);
    //we don't need to use $location here to flip back to favorites everytime they click to add to favorites, but i'm including it so we can see how it works. 
    // $location.path("/quote-faves")
    return faves;
  }

  const getFaves = () => {
    console.log("get faves in service");
    return faves;
  }

  return {
    getQuotes, 
    returnResults, 
    addToFaves, 
    getFaves
  };
}


angular
  .module("App")
  .factory("QuoteService", QuoteService);