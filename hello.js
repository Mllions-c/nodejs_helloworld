/*
var a=100;
console.log(a);
var d=new Date()
console.log(d.getDate());
console.log(d.getMonth()+1);
*/
/*
var arr=[1,2,3];
arr.push(4);
console.log(arr)
*/
/*
function person(name){
    this.name=name;
}
person.prototype.run=function(){
    console.log(this.name+'running');
}
var p1=new person("aa")
p1.run()
*/
/*
全局对象和非全局
var a=100;
console.log(a);
global.a=200;
console.log(global.a);
*/
/*console.log(__filename);//当前模块*/
//模块加载
/*require("./2.js");*/
//绝对路径
//require('d:/杨阳/webstorm/prictise/js/2.js')
//绝对路径
/*require("./2.js");*/
//加载方法1)查找文件名称2）然后加上js后缀查找3）在文件名称后加json查找4）加.node查找5）报错
//不能加载外部var定义的变量
//通过全局定义
/*可以用global.a = 100;
2.使用模块定义module,保存和提供与当前模块有关的信息*/
console.log(module)
3.使用exports，将外部信息作为module的一个属性，使外部局部变成可访问的
module.exports.a=a
