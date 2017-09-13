/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
var http = require('http');
var url = require('url');
var users = [];
var formida65ble = require('formidable');// npm安装的模块

var server = http.createServer(function(request,response){

    var urlObj = url.parse(request.url,true);//true转化为字符串

    if (urlObj.pathname =='/'){
        response.writeHead(200,{'content-Type':'text/html;charset=utf-8'})//响应头
        fs.readFile('./register2.html',function(err,data){
            response.end(data);

        })
    } else if(urlObj.pathname=='/reg'){
        var str ='';
        var str2 ='';
        //数据接收会触发on
        request.on('data',function(data){
            str2+=data
            str += data.toString();//数据不是连续的，所以要先存储
        } );
        //所有数据接收完毕后会触发end
        request.on('end',function(){
            // 构建一个解析器
            var form = new formidable.IncomingForm();
            // 用解析器解析请求体
            // 把非file的input放在fields里
            // 把文件类型的元素放在files里
            form.parse(req, function(err, fields, files) {
                fs.readFile(files.avatar.path,function (err, data) {
                    console.log(files.avatar,'files.avatar');
                })
                var filename = 'imgs/'+files.avatar.name;
                fs.writeFile(filename,data,function(err){
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.end(filename)
                })
                // inspect把对象转成字符串
                res.end(util.inspect({fields: fields, files: files}));
            });
            response.end(str);

        })
    } else {
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('content-Type',mime.lookup(pathname));
                fs.readFile('.'+pathname,function(err,data){
                    res.end(data);
                })
            } else {
                res.statusCode=404;

            }
        })
    }
    

});
server.listen(7771);