var https = require('https')
var emptyData = ''

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */

    https.get(requestOptions, function (response){
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

getAndPrintHTML()
