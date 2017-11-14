'use strict'

//变量的解构赋值

//1 数组的解构赋值;;只要等号两边的模式相同，左边的变量就会被赋予对应的值
let[a,b,c]= [1,2]
console.log(a,b,c)

let [foo, [[bar], baz]] = [1, [[2], 3]];

let [x,y,z] = new Set(["a","b","c"])
console.log(x,y,z)

//默认值
let [foos = 'foossss'] = [];
console.log(foos);

let [xx = 1] = [undefined]
console.log(xx);

function f() {
    console.log('aaa');
}  
let [xxx = f()] = [1];


//对象的解构赋值

let{fooo,barr} = {fooo:"aaa", barr:"bbb"}
console.log(fooo);
console.log(barr)
;
// 字符串的解构赋值
const[aX,bX,cX,dX,eX] = 'hello'
console.log(aX);

// 数值和布尔值的解构赋值
let {toString: s} = 123;
s === Number.prototype.toString // true



console.log('====================================')
console.log("解构用途")
console.log('====================================')

// （1）变换指
let X = 1;
let Y = 2;
console.log(X,Y);
[X,Y] = [Y,X]
console.log(X,Y);

// （2）从函数返回多个值
function excmple(){
    return [1,2,3]
}
let [XX,YY,ZZ] = excmple();
console.log(XX,YY,ZZ);

function excmpleObject(){
    return {
        food:1,
        bard:2
    };
}
let {food,bard} = excmpleObject()
console.log(food,bard);

// (3)函数参数的定义
function f([x,y,z]){
    console.log(x,y,z);
}
f([1,2,3])

function ff({x,y,z}){
    console.log(x,y,z);   
}
ff({z:1,y:2,x:3})

//(4)提取 JSON 数据
let jsonData = {
    id:200,
    status:'OK',
    data:[77,88,99]
}
let {id, status,data:number} = jsonData;
console.log(id,status,number);

// (5)函数参数的默认值
// （6）遍历 map 结构
const map = new Map();
map.set('first', 'hello')
map.set('second', 'world')
for (let [key,value] of map) {
    console.log(key + " is " + value);    
}

for(let [key] of map){

}

for(let [value] of map){
    
}

