//  Iterator 和 for...of 循环

/* Iterator 的作用有三个：
一是为各种数据结构，提供一个统一的、简便的访问接口；
二是使得数据结构的成员能够按某种次序排列；
三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
*/

function makeIterator(array){
    var nextIndex = 0;
    return {
        next:function(){
            return nextIndex < array.length ?
            {value:array[nextIndex++],done:false}:
            {value:undefined,done:true}
        }

        //简写
        // next:function(){
        //     return nextIndex < array.length ?
        //     {value:array[nextIndex++]}:
        //     {done:true}
        // }
    }
}

var it = makeIterator(['a','b']);

console.log(it.next().done);
console.log(it.next().done);
console.log(it.next().done);


// （2）默认 Iterator 接口
/*
当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。
一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是”可遍历的“（iterable）。
原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
*/

let array = ['aa','bb','cc'];
let iter = array[Symbol.iterator]();//变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var someString = "hi";
var iterator = someString[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

const arrayColor = ['red', 'green', 'blue'];
for(let color of arrayColor){
    console.log('------------------------------------');
    console.log(color);
}

