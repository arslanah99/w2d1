let https = require('https');
emptyData = ''

module.exports = function getHTML (options, callback) {
    /* Your code here */
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
};

function printHTML (html) {
  console.log(html);
}
