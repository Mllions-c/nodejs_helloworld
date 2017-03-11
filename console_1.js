/**
 * Created by dingyl on 2017/2/24.
 */
//打印日志console方法
console.log("this is a log");
console.info("this is a log");
console.warn("this is a log");
console.error("this is a log");

console.time('test');//打印运行一段代码需要的事件
for(var i=0;i<1000000;i++){}
console.timeEnd('test');
//打印日志stdout、stderr方法
process.stdout.write("this is stdout")
process.stderr.write("this is stderr")
//读取键盘输入
//1)设置编码
process.stdin.setEncoding("utf-8");
/*//data返回用户输入的内容
process.stdin.on('data',function(data){
    console.log(data)
})*/
//读取键盘输入2
/*process.stdin.on('readable',function(){
    var data=process.stdin.read();
    console.log(data);
})*/

