//浏览器
// window对象不但充当全局作用域，而且表示浏览器窗口。window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度
'use strict'
console.log(window.innerWidth + " "+ window.innerHeight);

//操作Dom
var js = document.getElementById('test-div');
console.log(js);


function callback() {
    console.log('Done');
}

console.log('before setTimeout()');
setTimeout(callback, 1000);
console.log('after setTimeout()');


new Promise(function () {});

function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

var p1 = new Promise(test);

var p2 = p1.then(function(result){
    console.log('成功 '+ result);
});

var p3 = p2.catch(function(reason){console.log('失败'+ reason);   
});


