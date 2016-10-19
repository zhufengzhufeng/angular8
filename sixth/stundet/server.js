// http
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var students = [
    {name:'张三',score:199,sex:'男',id:1},
    {name:'李四',score:60,sex:'女',id:2},
    {name:'王五',score:20,sex:'男',id:3},
    {name:'赵六',score:10,sex:'男',id:4},
];
http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname=='/'){
        fs.createReadStream('./3.resource.html').pipe(res);
    }else if(/^\/student(\/\d+)?$/.test(pathname)){
        var id = pathname.match(/^\/student(\/\d+)$/);
        switch (req.method){
            case 'GET':
                if(id){//获取一个

                }else {
                    res.end(JSON.stringify(students));
                }
                break;
            case 'POST':
                break;
            case 'DELETE':
                if(id){ //删除某一个
                    id = id[1].slice(1); //获取需要删除的id
                    students = students.filter(function (item) {
                        return item.id!=id;
                    });
                    //最后返回一个空对象表示删除成功
                    res.end(JSON.stringify({}));
                }else{

                }
                break;
            case 'PUT':
                break;
        }
    }
    else{
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