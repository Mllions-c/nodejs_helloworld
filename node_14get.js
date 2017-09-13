/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
var http = require('http');
var url = require('url');
var mime = require('mime');

var server = http.createServer(function(request,response){

    var urlObj = url.parse(request.url,true);//true转化为字符串

    console.log(urlObj.pathname);

    if (urlObj.pathname =='/'){
        response.writeHead(200,{'content-Type':'text/html;charset=utf-8'})//响应头
        fs.readFile('clock.html',function(err,data){
            response.end(data);

        })
    }
    else if(urlObj.pathname=='/clock'){
        response.end(new Date().toLocaleString());
        //response.statusCode = 404;
        response.end()
    }
    

})
server.listen(7777);