var  http  =  require('http');  
http.createServer(function  (request,  response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){  //�����2�˷���  
        console.log('����');  
        response.write('hello,world');  
        response.end('hell,����');//��д��û��httpЭ��β,��д�˻�������η���  
    }  
}).listen(8887);  
console.log('Server  running  at  http://127.0.0.1:8887/');  
  
