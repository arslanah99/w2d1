let https = require('https');
emptyData = ''

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function (response){
        response.setEncoding('utf8')
    
    response.on('data', function (data){
        var filledString = data += emptyData
        console.log(filledString)
    })
    response.on('end', function(){
        console.log('Response stream completes.')
    })
    })
}
  function printHTML (html) {
    console.log(html);
  }
  
  var getHTML = require('./Make_It_Module');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };
  getHTML(requestOptions, printHTML)