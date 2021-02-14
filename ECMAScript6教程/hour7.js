// 对象的拓展

// （1）属性的简介表示法
const foo = 'bar'
const baz = {foo}//ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
console.log(baz)
console.log(baz.foo)

function f(x,y){
    return {x,y}
}
console.log(f(1,2));

let birth = '2017/10/10'
const Person = {
    name:'hh',
    birth,
    hello(){console.log('my name is '+ this.name)}
};
Person.hello();

function getPoint(){
    const x = 1;
    const y = 2;
    return {x, y}
}
console.log(getPoint())

let ms = {}
function getItem (key){
    return key in ms ? ms[key]:null
}
function setItem (key, value){
    ms[key] = value;
}

function clear () {
    ms = {}
}

// module.exports = {getItem, setItem,clear};
// (2)属性名表达式
var obj = {};
obj['a'+'bc'] = 123
console.log(obj)
// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内
let propKey = 'foo'
let object = {
    [propKey]:true,
    ['a'+ 'bc']:123
}
console.log(object.abc);

let lastWord = 'last word'
const wordObj = {
    'first word':'hello',
    [lastWord]:'world'
};
console.log(wordObj['first word'])
console.log(wordObj[lastWord])

//表达式还可以用于定义方法名。 好鸡肋
let funcNameObj = {
    ['h' + 'ello'](){
        return '1024'
    }
};
console.log(funcNameObj.hello());

// 方法的name属性
const person ={
    sayName(){
        console.log('hell0 hh');
    }
}
console.log(person.sayName.name);

// （4）OObject.is()它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
console.log(Object.is('123', 'ddd'));
console.log(Object.is('123', 123));
console.log(Object.is('123', "123"));

// （5）Object.assign()用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
const target = {a:1}
const source1 = {b:2}
const source2 = {c:3}
const source3 = {c:1024}//同名覆盖
Object.assign(target,source1,source2,source3);
console.log(target)


// （6）属性的可枚举性和遍历
let objDis = {abc:111}
console.log(Object.getOwnPropertyDescriptor(objDis,'abc'))

//Object的其他属性实在是敲不下去了
