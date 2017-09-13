/**
 * Created by dingyl on 2017/3/10.
 */
//fs操作
var fs = require('fs');
//同步写入fs.writeSync(fd, buffer, offset, length[, position])
fs.writeFileSync('./wirtes1.text','124356475744');
//异步写入fs.writeFileSync(file, data, options)
//a:追加 w：清空写入
fs.writeFile('wirte1.text','这里用的是异步写入的操作',{flag:'a'},function(err){
    //console.log(arguments);//查看参数有几个
    console.log(err);

})
//文件添加内容，同flag：a的操作
fs.appendFile('1.text','这里是使用appendFile追加的')
