/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');

// 读取文件操作1，异步操作
fs.readFile('sum.js','utf-8', function(err, data){//不写utf-8,可以在下面加
   if(err) {
       console.error(err);
   }
   else{
       console.log(data);//如果不toString(),会输出16进制
   }
})
console.log('=======================')
// 读取文件操作2：同步
try {//不能用try catch补获异步错误
   var data = fs.readFileSync('sum2.js', 'utf-8');//同步不需要回调函数
   console.log(data);
}catch(err){
console.error(err);}
console.log('=======================')
// 异步读取多个文件(计数器方法)
var obj = {};
function show(){
   if(Object.keys(obj).length==2){// 等到name和age全部赋值后，打印出obj
       console.log(obj);
   }
}
// 异步操作完成的顺序跟代码顺序无关
fs.readFile('test1.txt', 'utf-8',function(err,name){
   obj.name = name;
   show();
});
fs.readFile('test2.txt', 'utf-8',function(err,age){
   obj.age = age;
   show();
});
