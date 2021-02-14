
function helloEMCA(name){
    console.log(name);
}

helloEMCA("hh");
{
    let a = 10;
    var b = 100;
    console.log("a="+a);    
}
console.log("b="+b);


for (let index = 0; index < 5; index++) {
    console.log(index);
}

console.log('=======');
var sum =0 ;
for(let i =0;i<100;i++){
    sum += i;
}
console.log(sum);


// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

console.log('=======块级作用域');

var tmp = new Date()

function f(){
    console.log(tmp);
    if(true){
        var tmp = 'Hello world'
    }
    console.log(tmp);
}
f();


console.log('=======Const 命令');
// const声明一个只读的常量。一旦声明，常量的值就不能改变。
// const的作用域与let命令相同：只在声明所在的块级作用域内有效
const PI = 3.1415926

const a = [];
a.push(1);
a.length = 10;
console.log(a)
// a = [""]报错


// const bbc = Object.freeze({})
// bbc.fly()

// 顶级对象属性
window.a = 1
window.a

let bb = 2
window.bb
console.log(bb)
