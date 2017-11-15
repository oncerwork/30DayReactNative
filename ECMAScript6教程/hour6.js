// 数组的扩展

// 1. 扩展运算符
console.log(...[1,2,3]);//将数组转为逗号分割的参数序列
console.log(0,...["1","2","3"],4)

function push(array,...items){
    array.push(...items);
    return array;
}

function add(x,y){
    return x + y;
}
console.log(push([],...[1,2,3,4]));
const numbers =[4,5];
var addSum = add(...numbers);
console.log(addSum);

function multiy(a,b,c,d,e){
    return a*b*c*d*e;
}
console.log(multiy(1,2,...[3,4,5]))


console.log(multiy(1,2,...(1<2 ? [4,5,6]:[])))//可以放表达式


// ...替代 数组的apply方法
function applyFunc(x,y,z){
    return x;
}
var args = [0,1,2]
console.log(applyFunc.apply(null,args));

let argss = [8,1,2];
var value = applyFunc(...argss)
console.log(value);

// ES5用法
// var max5 = Math.max(45,45,5,0);
var max5 = Math.max.apply(null,[45,45,5,0]);
console.log(max5);
// ES6用法
var max6 = Math.max(...[45,45,5,0]);
console.log(max6);

//数组拼接
var array1 = [3,4,5];
var array2 = ["J","Q","K"];
array1.push(...array2);
console.log(array1)

// 扩展运算符的使用

// (1)复制数组
const a1 = [1,2]
const a2 = [...a1]
const [...a3] = a1
console.log(a2)
console.log(a3)

// (2)合并数组
var a4 = ['a','b','c']
var a5 = ['d','e','f']
var a6 = ['g','h','i']
a4 = a4.concat(a5,a6);
console.log([...a4,...a5,...a6])
console.log(a4);

// (3)与解构赋值结合
const [first,...rest] = [1,2,3,43,4,5];
console.log(first);//从数组中取值
console.log(rest);//从数组中取值

const [a, ...b] = ['ff']
console.log(a);//从数组中取值 1
console.log(b);//从数组中取值 []

// 扩展运算符用于数组赋值，只能放在参数的最后一位

// (4)字符串
console.error('字符串开始----->');
console.log([...'helloworld']);

let string = 'x\uD83D\uDE80y';
// string.slice('').reverse().join('-')

// （5）实现Iterator接口的对象
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

// （6）Map 和 Set 结构，Generator 函数
let map = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

let arr = [...map.values()];
console.log(arr);

const go = function *(){
    yield 1;
    yield 22;
    yield 333;
}

console.log([...go()]);


/**
 * 2 Array.from()
 * Array.from方法将对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
 */



let likeArray = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:100
}

console.error(likeArray['data'])
console.log(typeof(likeArray))
let doArray = Array.from(likeArray)
console.error(doArray);

console.log(Array.from('hello'))
let namesSet = new Set(['a','b'])
console.error(namesSet)

// Array.of方法用于将一组值，转换为数组。
var ddd = Array.of(1,2,4,3)
console.log(ddd)

