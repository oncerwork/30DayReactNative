'use strict'

//方法参数支持默认值
console.log('this is a Text')
function log(x,y='world'){
    console.log(x,y);
}
log('hello');
log('hello','HH');

function Point(x=0,y=0){
    this.x = x;
    this.y = y;
}
const p = new Point();
console.log(p)

// 与解构赋值默认值结合使用
function foo({x,y =5}={}){
    console.log(x,y)
}
foo({x:1});
foo();

function fetch(url,{body = '', method='GET',header= {}}){
    console.log(method);
}
fetch('baidu.com',{});
// fetch('baidu.com');

//参数默认值的位置
function f(x =1,y){
    return [x,y]
}

console.error(f.length);//lenght未设置默认值的参数个数

// 作用域
var x =1 
function ff(x,y=x){
    console.log(y);
}
ff(2)

let foos = 'outer'
function bar(func = ()=>foos){
    let foo = 'inner'
    console.log(func())
}
bar()

//应用 
function throwIfMissing(){
    throw new Error('Missing param')
}
function foo1(mustBeprovied = throwIfMissing()){
    return mustBeprovied
}
// foo1()
// foo1(1)

//参数可以忽略
function foo2(mustBeprovied = undefined){
    return mustBeprovied
}
foo2()

// rest 参数
function add(...values){
    let sum = 0;
    for(var value of values){
        sum += value
    }
    console.log(sum)
}
add(1,2,2,3,4)
const sortNmubers = (...numbers)=> numbers.sort()

function push(array, ...items){
    items.forEach(function(item){
        array.push(item);
        console.log(item);
    });
}
var a = [];
push(a,0,1,2,3,4)


//name属性
console.log(push.name)

// 箭头函数
var foo2 =  v=>v*v;
console.log(foo2(6));

// 不需要参数
var foo3 = ()=>11;
var foo4 = (x,y)=>x+y;
console.log(foo4(1,100));

//对于一行的时候
var sum = (num1,num2)=> {
    return num1 + num2;
}
console.log(sum(1,3))
//返回对象

let getTemp = id => ({id:id, name:'Temp'})
var tempName = getTemp(123,'Game').name
console.log(tempName)

//尾调用

function g(z){
    console.log(z);
}
function f(x){
    return g(x)
}
//函数f的最后一步是调用函数g，这就叫尾调用

