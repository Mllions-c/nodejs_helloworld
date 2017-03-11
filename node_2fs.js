/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');

//读取文件操作1，异步操作
//fs.readFile('sum.js','utf-8', function(err, data){//不写utf-8,可以在下面加
//    if(err) {
//        console.log(err);
//    }
//    else{
//        console.log(data);//如果不toString(),会输出16进制
//    }
//})

//读取文件操作2：同步
//var data = fs.readFileSync('../test2.txt', 'utf-8');//同步不需要回调函数
//console.log(data);