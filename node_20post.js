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
        fs.readFile('./register.html',function(err,data){
            response.end(data);

        })
    }

    else if(urlObj.pathname=='/reg'){
        var str ='';
        var str2 ='';
        //数据接收会触发on
        request.on('data',function(data){
            str2+=data
            str += data.toString();//数据不是连续的，所以要先存储
        } );
        //所有数据接收完毕后会触发end
        request.on('end',function(){
            var contentType = request.headers['content-type'];// 根据不同请求类型来处理
            if (contentType == 'application/x-www-form-urlencoded') {// 默认方式
                var obj = querystring.parse(str);
            } else if (contentType == 'application/json'){
                var obj = JSON.parse(str);
            }

            //console.log(str2);//{"username":"yagnyang","age":"12"}
            //console.log(str);//{"username":"yagnyang","age":"12"}
            users.push(JSON.parse(str));//将字符串解析成JSON对象
            //response.end(JSON.stringify(users))//将对象解析成字符串
            //console.log(JSON.parse(str));//{ username: 'yagnyang', age: '12' }
            //console.log(users);//[ { username: 'yagnyang', age: '12' } ]
            //console.log(JSON.stringify(users));//[{"username":"yagnyang","age":"12"}]
            // console.log(JSON.stringify(str));//"{\"username\":\"yangyang\",\"age\":\"12\"}"
           // console.log(JSON.stringify(JSON.parse(str)));//{"username":"yangyang","age":"12"}

            response.end(str);

        })
    }
    

})
server.listen(7777);