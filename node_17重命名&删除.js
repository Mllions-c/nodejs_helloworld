/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
//重命名
fs.rename('node_17rename.js','node_17重命名&删除.js',function(err){
    console.log(err);
})

//删除文件
//fs.unlink('rename.txt',function(err){
//    if(err){
//        console.log('删除文件失败');
//    }
//    else{
//        console.log('删除文件成功');
//    }
//})