/**
 * Created by dingyl on 2017/3/10.
 */
var http =require('http');
var url = require('url');
var fs = require('fs');

    http.createServer(function(request, response){
    var urlObj = url.parse(request.url);//用parse解析返回的综合url信息，为数组格式

    var pathname = urlObj.pathname;//获取到pathname

    if (pathname == '/'){//如果用户只输入/的情况，也就是定义默认首页
        fs.readFile('index.html', 'utf-8', function(err, data){
            response.end(data);
        })
    }
    else if(pathname === '/ajax'){//定义特殊情况
        response.end ('{"SB":"this is a json"}');
    }
    else {//普通情况
        readFileAndResponse (pathname, response);
    }

}).listen(8888);
function readFileAndResponse (pathname, response) {
    fs.readFile('..'+pathname, 'utf-8', function(err, data){//substr(1),从第一个字符开始取，也就是去掉了/，如果是相对路径就不需要了。

        if (err) {//定义错误情况
            response.writeHead(404);//写入请求头
            response.end ('<html><head><meta charset="utf-8"><div style="margin: 0 auto; width: 1000px;color: red; text-align: center"><h1>' +
                ' 傻蛋蛋，没有这个网址，好好看看</h1></div></body></html>');
        }
        else{//正常情况
        response.
        response.end(data);//读取文件夹并返回
        }
    })
}
