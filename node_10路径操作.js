/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
//路径操作
var path = require('path');
//console.log(path.join('path1.txt','path2.txt'));//由于系统不同，分隔符不同，所以不要自己拼
//console.log(path.sep) // 查看当前分割符号
//
////获取路径的文件名
//console.log(path.basename('path1.txt','txt'));//path1 不加txt则输出全部
////获取路径的扩展名
//console.log(path.extname('path1.txt'))//
// 当前文件绝对路径
//console.log(__filename);
// 当前文件绝对目录
//console.log(__dirname);
//当前项目路径
console.log(path.resolve())
// 基于项目路径，可以自己添加子路径
console.log(path.resolve('dir1','test1','..','test2'))// 点点可以跳到上级