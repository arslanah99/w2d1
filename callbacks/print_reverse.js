var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };
  

  function printReverse (html){
      var splitString = html.split('')
      var sentence = splitString.reverse()
      var joiner = sentence.join('')
      console.log(joiner)
  }

  getHTML(requestOptions, printReverse)