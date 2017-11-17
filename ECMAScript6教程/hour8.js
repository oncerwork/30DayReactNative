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
let setFor = new Set(['Ace','Bar','Car','Dog'])
console.log(setFor.key)
