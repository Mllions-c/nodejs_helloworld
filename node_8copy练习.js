/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
function copy(src,target){
    fs.readFile(src,'binary',function(err,data){// 二进制文件用binary,不写默认就是binary

        fs.writeFile(target,data,function(){
            if(err){
                console.error(err);
            }
            console.log('copy from '+src+' is successful to '+target)
        })
    })

}
copy('1.jpg','2.jpg');