/**
 * Created by dingyl on 2017/2/26.miaov-20
 */
var projectData={
    'name':'miaov',
    'fileData':[{
        'name':'css',
        'type':'dir'
    },{
        'name':'js',
        'type':'dir'
    },{
        'name':'images',
        'type':'dir'
    },{
        'name':'index.html',
        'type':'file',
        'content':'<html>\n\t<head>\n<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body>\n</html>',
     }
  ]
}
var fs=require('fs');
if(projectData.name){
    fs.mkdir(projectData.name);
    var fileData=projectData.fileData;
    if()
}
