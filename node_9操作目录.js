/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
// 创建目录,如果有父目录，父目录必须存在
fs.mkdir('dir1/dir2', function (err) {
   if(err){
       console.error('fail to create');
   }
   else{console.log('successful to create');}

})

// 读取目录下所有文件
fs.readdir('dir1',function(err,files){
   if(err){
       console.error(err);
   }
   else{
       console.log('读取文件成功：文件为'+files);
   }
})

// 读取文件夹素有文件
// fs.readdir('dir1',function(err,files){
//
//    // 遍历获取的文件
//    files.forEach(function(file){
//        // 获取文件或目录的详情
//        fs.stat('dir1/'+file,function(err,state){
//            console.log(state.isDirectory());//判断类型
//            console.log(state.isFile());//。。
//            console.log(state.size);//字节长度
//            console.log(state);//详情
//        })
//    })
//
// })


// 判断文件或文件加是否存在
fs.exists('dir1',function(Booleans){
   console.log(Booleans)
})

