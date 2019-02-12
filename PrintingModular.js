//Input give any html with a path and give its content
//Step 1: assign the parameters to two empty object values
//Step 2: be able to return the parameter with host and path
//Step 3 be able to run the code from step 2 code
//step 4: return data
//output returns it contents with given html and path

var https = require('https')
var emptyData = ''

function getAndPrintHTML (options) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)