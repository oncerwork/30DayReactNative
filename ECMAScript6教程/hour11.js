// Promise 对象 这个必须读完

/* 
（1）Promise 是异步编程的一种解决方案，所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果（类似block）
 Promise 是一个对象，从它可以获取异步操作的消息
 
 (2）Promise对象有以下两个特点
    2.1对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
    2.2一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）   
*/

//基本写法
// const promise = new Promise(function(resolve,reject){
//     //some code
//     if(/*异步操作成功*/sucess){
//         resolve(value);
//     }else{
//         reject(error)
//     }
// });

// //
// promise.then(
//     function(value){
//         console.log("Sucess")
//     },
//     function(error){
//         console.log("Error")
//     }
// )

//使用例子1

function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done');
    });
}
timeout(100).then((value)=>{
    console.log('------------------------------------');
    console.log(value);
    console.log('------------------------------------');
});
// timeout(5);
// console.log('Hi');

//使用例子2
let promise = new Promise(function(resolve,reject){
    console.log('Promise begin');
    resolve();
});
promise.then(function(){
    console.log('Promise Done');
});


//使用例子3 异步下载图片
function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image = new Image();
        image.onload = function(){
            resolve(image);
            console.log(image);
        };
        image.onerror = function(){
            console.log('Coundnt load image');
            reject(new Error('Coundnt load image at '+ url));
        };
        image.src = url;
    });
}

loadImageAsync('https://wx1.sinaimg.cn/mw690/72da4f13gy1flpebo0c0oj20jg0axdjx.jpg');

// 使用例子4 Ajax操作

const getJSON = function(url){
    const promise = new Promise(function(resolve,reject){
        const handler = function(){
            if(this.readyState!==4){
                return;
            }
            if(this.readyState==200){
                resolve(this.response);
            }else{
                reject(new Error(this.stateText));
            }
        };

        const client = new XMLHttpRequest()
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });
    return promise;   
}
getJSON('http://www.sojson.com/open/api/weather/json.shtml?city=%E6%B5%8E%E5%8D%97').then(function(json){
    console.log('------------------------------------');
    console.log(json);
    console.log('------------------------------------');
},function(error){
    console.log(error.description);
})
