/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');

var path = require('path');
fs.appendFile('../git.txt','使用gitbach来访问服务器：curl http://localhost:8888')


fs.readFile('../git.txt','utf-8',function(err,data){
    console.log(data);
})
//获取文件或目录的详情
//fs.readdir('dir1',function(err,files){
//
//
//    files.forEach(function(file){
//        console.log(file)
//        fs.stat('dir1/'+file,function(err,state){
//            console.log(state.isDirectory());//判断类型
//            console.log(state.isFile());//。。
//            console.log(state.size);//字节长度
//            //console.log(state);//详情
//        })
//    })
//
//})

//判断文件或文件加是否存在
//fs.exists('dir1',function(Booleans){
//    console.log(Booleans)
//})

