// http
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname=='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/jsonp'){
        //我们要获取前台传过来的cb的名字
        var arr =JSON.stringify([1,2,3]);
        var fnName = url.parse(req.url,true).query.callback; //随机方法
        res.end(`${fnName}('${arr}')`);
    }else if(pathname=='/book'){
        res.end(JSON.stringify([1,2,3]));
    }else if(pathname == '/saveBook'){
        var str = '';
        req.on('data',function (data) {
            str+=data
        });
        req.on('end',function () {
           console.log(str);
        })
    }else if(pathname =='/delete'){

    }else if(pathname == '/deleteOne'){

    }else if(pathname =='/saveBook'){

    }else if(pathname =='updateBook'){

    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode  = 404;
                res.end();
            }
        });
    }
}).listen(8080);