/**
 * Created by dingyl on 2017/3/10.
 */
var http =require('http');
var fs = require('fs');

http.createServer(function(request, response){//响应内容只能是字符串或者Buffer
   /* response.end('<html><head><meta charset="utf-8>"> </head></head>' +
        '<body><h2>My first httppage</h2></h2></body></html>');//直接在返回里写标签*/
        response.write('hello')//响应内容，可以有多个wirte,

        response.end('123');//响应内容并结束,end之后不嗯给你wirte

}).listen(1234);