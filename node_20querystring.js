querystring = require('querystring');
s = 'name=zfpx&age=8';
// 将查询字符串转为对象
console.log(querystring.parse(s));
console.log(querystring.stringify(querystring.parse(s)));
