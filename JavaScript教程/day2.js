function abs(x){
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x > 0){
        return x 
    }
    else{
        return -x;
    }
}

var abs = abs(-10)
console.log(abs)

var abss = function(x){
    if (x > 0){
        return x 
    }
    else{
        return -x;
    }
};

//Arguments
function fo0(x){
    console.log(arguments)
}

fo0(100)

//变量作用域与解构赋值
function foos(){
    var x = 1
    x = x + 1
    return x
}
console.log(foos(1))
var course = 'Learn JavaScript';


function fooVar(x) {
    for (var i=0; i<x; i++) {
        //
        console.log(i)
    }
    i += 100; // 仍然可以引用变量i
    return i;
}

console.log(fooVar(5))

//为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
function fooLet(x) {
    for (let i=0; i<x; i++) {
        //
        console.log(i)
    }
    // i += 100; // 仍然可以引用变量i
    // return i;
}

//常量
const PI = 3.14;
const APIVERSION = 1


//对象
var xiaoming = {
    name:'一一',
    birthday: 2016,
    age:function(){
        var Y = new Date().getFullYear();
        return Y - this.birthday
    }
}

console.log(xiaoming.age())


console.log.apply("-----------高阶函数-----------")

function add(x, y, f){
    return f(x) + f(y)
}

console.log(add(-5,6,Math.abs))







