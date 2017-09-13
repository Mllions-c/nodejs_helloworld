/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
fs.readdir('dir1',function(err,files){

    files.forEach(function(file){

        fs.watch('dir1/'+file,function(ev,file){

            console.log(file+'执行了'+ev);
        })
    })
})

//fs.watch('dir1/test1.txt',function(ev,file){
//
//        console.log(file+'执行了'+ev);
//   })