// http
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
http.createServer(function (req,res) {
    var pathname = url.parse('url').pathname;
    if(pathname=='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode  = 404;
                res.end();
            }
        })
    }
}).listen(8080);