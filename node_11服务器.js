/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
var http = require('http')
//服务器：特定Ip特定端口上监听请求，并返回相应结果
var server = http.createServer(function(request,response){
    // 请求的参数
    //console.log(request.method);//请求的方法
    //console.log(request.url);//请求的url
    //console.log(request.headers);//请求的头
    // 返回的参数
    response.statusCode=404;//设置响应码
    response.setHeader('Content-Type','text/html;charset=utf-8')//响应头
        response.write('123tt22')// 设置响应体
        response.end('1234');// 响应体结束
})
server.listen(3333);