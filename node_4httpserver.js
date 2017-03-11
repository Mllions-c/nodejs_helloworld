/**
 * Created by dingyl on 2017/3/10.
 */
var http =require('http');
var fs = require('fs');

http.createServer(function(request, response){
   /* response.end('<html><head><meta charset="utf-8>"> </head></head>' +
        '<body><h2>My first httppage</h2></h2></body></html>');//直接在返回里写标签*/


        response.end('123');//读取文件夹并返回

}).listen(1234);