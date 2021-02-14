// (1)分析HTTP服务器
// var http = require("http");
// console.log('HTTP');
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(1024)


/*
* “var http = require("http"); 自带的 http 模块，并且把它赋值给 http 变量”
* 调用createServer函数 (传入唯一的方法参数)返回一个对象，对象可以调用listen（Host）参数
*/


// (2)进行函数传递
function say(word) {
    console.log(word);
}

function execute(someFunction,value) {
    someFunction(value);
}

execute(say,'Hello NodeJS');//

execute(function (word) {
    console.log(word);
},'MISS HH');//直接在参数中定义函数，作为匿名函数,无需定义方法名

// (3)基于事件驱动的回调

/*
var http = require("http");//应用Node.js的内部模块

function onRequst(request ,response) {
    console.log('Request recieve');//会请求两次，因为服务器会自动请求 http://localhost:1024 和   http://localhost:1024/favicon.ico
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("HELLO WORLD !!!");
    response.end();
}

http.createServer(onRequst).listen(1024);
console.log("Server has started");
*/

// (4)服务器如何处理请求的
// (5)服务器端的模块放在哪里

var http = require("http");//应用Node.js的内部模块
var url = require("url");

function start(route,handle) {
    function onRequst(request ,response) {

        var pathName = url.parse(request.url).pathname;
        console.log("Request for "  + pathName +  " received.");
        route(handle,pathName,response);//路由
      /*  console.log('Request recieve');//会请求两次，因为服务器会自动请求 http://localhost:1024 和   http://localhost:1024/favicon.ico
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(content);
        response.end();*/
    }
    http.createServer(onRequst).listen(1024);
}
exports.start = start;

