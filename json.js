var http 	= require('http');
var fs 		= require('fs');
var port 	= "1111" ;

http.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By':'nodejs'
    });


    fs.readFile('data.json', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(port);

console.log("Listening on port " + port );
var http = require('http');

// var app = http.createServer(function(req,res){
//    res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ a: 1 }));
// }).listen(888, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:8888');
// const query = require ('querystring');
// const test = query.parse('name=Mohammed & lasr=Younis');

// console.log(test);
