//reqire moudel 
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var manytypes = {
    'html' : 'text/html',
    'jpeg' : 'image/jpeg',
    'jpg'  : 'image/jpeg',
    'png'  : 'image/png',
    'js'   : 'text/javascript',
    'css'  : 'text/css'
};

 //create server
 http.createServer(function(req,res){
    var url = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(),unescape(url));
    console.log('Loading ' +url);
    var stats;
    try {
        stats = fs.lstatSync(filename);
    } catch (error) {
        res.writeHead(404,{
            'content-type' : 'text/plain'
        });
        res.write('404 Not found \n');
        return;
    }
    // Check if file exist 
    if (stats.isFile()) {
        var manytype = manytypes[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200,{'content-type' : manytyp});
        var filestream = fs.createReadStream(filename);
        filestream.pipe(res);
    } else if(stats.isDirectory()){
        res.writeHead(302 , {
            'Location' : 'index.html',
        });
        res.end();
    } else{
        res.writeHead(500 , { 'content-type' : 'text/plain' });
        res.write('500 Internet Error');
        res.end();
    }
 }).listen(3000);
 