var i = 0;
while(i==0){

var start = new Date();
var a;
var b;
var img = new Image();

img.onerror = function() {
    a=new Date() - start
};

img.src = 'https://www.gartic.com.br/';


window.fetch = (function(fetch) {
  return function(fn, t) {
    const begin = Date.now();
    return fetch.apply(this, arguments).then(function(response) {
      response.timing = Date.now() - begin;
      return response;
    });
  };
})(window.fetch);

fetch('https://gartic.com.br')
  .then(function(response) {
   b=response.timing
    return response.json();
  })

document.querySelectorAll('input')[7].attributes[0].textContent = parseInt((a+b)/2)+'ms'


 await new Promise(wait => setTimeout(wait, 5000));
}