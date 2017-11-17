// Symbol
let s = Symbol()
console.log(typeof(s))

// 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
// Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
let s1 =Symbol('s1')
console.log(s1)

//Set和Map数据结构

//Set 类似于数组，值是唯一的
const set = new Set()
var array = [1,3,2,23,6,20];
array.forEach(x =>set.add(x));
console.log(set);

for (let x of set) {
    console.log(x);
}

//set 可以通过支持 iterable 的结构作为参数
const setArray = new Set([1,3,4,5,5,6,6])
console.error([...setArray])//数组去重

//Set 实例的属性和方法
// add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
var setDemo = new Set();
setDemo.add('A').add('B').add('C')
console.log(setDemo)
console.log(setDemo.size)

console.log(setDemo.has('A'))
console.log(setDemo.delete('1'))
setDemo.clear;
console.log(setDemo)

//遍历操作
let setFor = new Set(['Ace','Bard','Car','Dog'])
for( let item of setFor.keys()){
    console.error(item)
}
//keys 和 values相同

for(let item of setFor.entries()){
    console.log(item);
}

for(let x of setFor){
    console.log(x);    
}

let arraySet = [...setFor]
console.log(arraySet);

console.error(arraySet.map(x => x.length>3));
console.error(arraySet.filter(x=>x.length>3));

//WeakSet

// WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
// 1 首先，WeakSet 的成员只能是对象，而不能是其他类型的值
// 2 WeakSet 是不可遍历的 WeakSet 中的对象都是弱引用
var wset = new WeakSet()
// wset.add(11)//插入数值报错

wset.add([1])


// Map
// Map数据结构。类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
var m = new Map()
var o = {p:'Hello wold'}
console.clear()
console.warn(o.p);

m[0]= 'content';
console.warn(m[0]);

var mapArray = new Map([['name','HH'],['title','Author']])
console.log(mapArray.size)
console.log(mapArray)
// 如果对同一个键多次赋值，后面的值将覆盖前面的值。

//map的方法
var map = new Map().set('1',1).set(2,'2').set('3',3)
console.log(map.get(2))
console.log(map)
map.forEach(function(key,value,map){
    console.log(key)
})
