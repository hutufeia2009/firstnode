/**
 * Created by Administrator on 13-10-31.
 */
var http = require('http');
var server = http.createServer();
var fs = require('fs');
var url = require('url');
server.on('request',handle);
function handle(req,res){
  var path = urltopath(req.url);
  fs.readFile(__dirname + '/public/' + path,function(err,data){
    if(err){
      res.statusCode = 404;
    }else{
      res.write(data);
    }
    res.end();
  });
/*  var data = fs.readFileSync(__dirname + '/public/index.html');
  res.write(data);
  res.end();*/
/*  res.writeHeader(200,{"Content-Type":"text/html"});
  res.write("<b>Hello world</b>");   //  向浏览器端写入数据
  res.end();   // 结束响应*/
}
function urltopath(requestUrl){
  var urlObject = url.parse(requestUrl);
  var path = urlObject.path;
  return path;
}
server.listen('3000');
console.log('listening 3000 prot success');