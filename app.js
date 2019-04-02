const request=require('request')

const url='https://api.darksky.net/forecast/f54578bb850cd16dba340c5d995c863c/37.8267,-122.4233'

// request(url, function (error, response, body) {
//   console.log('error:', error); 
//   console.log('statusCode:', response && response.statusCode); 
//   console.log('body:', response); 
// });

request({url},(err,res)=>{
    console.log(res);
    

})