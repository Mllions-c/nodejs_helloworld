/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
var http = require('http');
var url = require('url');
var mime = require('mime');

var server = http.createServer(function (request, response) {

    var urlObj = url.parse(request.url, true);//true转化为字符串
    var pathname = urlObj.pathname;
    console.log(pathname);

    if (pathname == '/') {
        response.writeHead(200, {'content-Type': 'text/html;charset=utf-8'})//响应头
        fs.readFile('../html/js_style/wlph.html', function (err, data) {
            response.end(data);

        })
    }
    else if (pathname == '/data.txt') {//定义特殊情况
        response.writeHead(200, {'content-Type': 'text/txt;charset=utf-8'})
        fs.readFile('../ajax_data/data.txt', function (err, data) {
            response.end(data);

            response.end()
        })
    }
    else {//普通情况
        readFileAndResponse(pathname, response);
    }


})
server.listen(9999);
function readFileAndResponse(pathname, response) {
    fs.readFile('..' + pathname, 'utf-8', function (err, data) {//substr(1),从第一个字符开始取，也就是去掉了/，如果是相对路径就不需要了。

        if (err) {//定义错误情况
            response.writeHead(404);//写入请求头
            response.end('<html><head><meta charset="utf-8"><div style="margin: 0 auto; width: 1000px;color: red; text-align: center"><h1>' +
                ' 傻蛋蛋，没有这个网址，好好看看</h1></div></body></html>');
        }
        else {//正常情况
            response.end(data);//读取文件夹并返回
        }
    })
}