/**
 * Created by dingyl on 2017/3/12.
 */
//处理二进制数据
//要提前确定长度
//全局的

//创建buffer,//字符串转buffer
//var buffer = new Buffer('珠峰','utf-8');//不指定默认utf-8,一个汉字3个字节
//var buffer = new Buffer(2)数字代表位数
//var buffer = new Buffer([1, 2, 3]);//可以直接带参数，数组里面要是数，其他进制也行

//buffer[0] = 255;//单个数字不能超过255，因为buffer是8位的

//buffer转字符串
//console.log(buffer.toString())//转换字符，默认utf-8
//buffer.toString('utf-8',3,6)//从4位取到5位，包前不包后

//合并Buffer
//var buf1 = new Buffer('我');
//var buf2 = new Buffer('是');
//var buf3 = new Buffer('天');
//var buf4 = new Buffer('才');

//var all = Buffer.concat([buf1,buf2,buf3,buf4],12)
//console.log(all.toString());//12代表输入的位数

//Buffer的数组方法
//var s = all.slice(9,12)//取从哪到哪
//console.log(s.toString())

//复制Buffer
//buf.copy(target, targetStart, sourceStart, sourceEnd)
//var buf1 = new Buffer('我是天才');
//var buf2 = new Buffer(12);
//buf1.copy(buf2, 0,0,3)//
//console.log(buf1.toString('utf-8',0,3))//转字符是从几到几

//判断Buffer
//var buf1 = new Buffer('我是天才');
//console.log(Buffer.isBuffer(buf1));

//判断Buffer字节长度
//console.log(Buffer.byteLength("我是天才"))