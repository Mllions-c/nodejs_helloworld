/**
 * Created by dingyl on 2017/3/10.
 */
// ps -ef | grep node  查看正在进行的node 进程
//fs操作
var fs = require('fs');
var http = require('http')
// mime 匹配content-type
var mime = require('mime');
var path = require('path');
var server = http.createServer(function(request,response){
    var url = request.url;
    response.setHeader('Content-Type',mime.lookup(request.url),'charset=utf-8')
    if (url == '/'){//如果用户只输入/的情况，也就是定义默认首页
        fs.readFile('url','utf-8',function(err, data){
            response.end(data);
        })
    }
    else{
        response.setHeader('Content-Type',mime.lookup(request.url),'charset=utf-8')//设置响应头
    fs.readFile('..'+url,'utf-8',function(err,data){
        response.end(data)
    })}

})
server.listen(4444);