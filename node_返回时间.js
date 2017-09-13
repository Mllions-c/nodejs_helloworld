/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var http =require('http');
var fs = require('fs');
//服务器：特定Ip特定端口上监听请求，并返回相应结果
 var server = http.createServer(function(request,response){
     var now = new Date();
     //设置内容类型的响应头
     response.setHeader('content-Type','text/html;charset=utf-8')
     response.end(now.toString())

})
server.listen(2234);
