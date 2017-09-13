/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
var http = require('http');
// url 解析字符串
var url = require('url');
var mime = require('mime');
var server = http.createServer(function(request,response){

    var urlObj = url.parse(request.url,true);//true可以使query变成对象
   response.writeHead(200,{'content-Type':'charset=utf-8'})//响应头
    if (urlObj.pathname =='/apple'){
        response.end(urlObj.query.num+'个苹果');
    }
})
server.listen(5555);