
// alert('Hello, world');
var x = 1;
var string = 'I\'m \"OK\"!';
var lineStr = "Hello \n world\nJS"
// alert(lineStr)

// alert(`多行
// 字符串
// 测试`);

//模板字符串
var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
// alert(message);

// ES6模板字符串
var name1 = '小红';
var age1 = 100;
var msg = `你好啊 ${name1} 你现在 ${age1}了`
// alert(msg);


//字符串操作

var lenght = msg.length

//需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：

var string = "THis is a Test"
console.log("测试"+string);
var upper = string.toUpperCase();
console.log(string.toUpperCase());


//数组
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length)
arr.length = 8;
console.log(arr)

//越界赋值
arr[10] = 100
console.log(arr)

//读取索引
var index = arr.indexOf(3.14)
console.log(index)

//截取数组
var newArray1 =  arr.slice(0,3)
var newArray2 =  arr.slice(3)
console.log(`new array1 is ` + newArray1)
console.log(`new array2 is ` + newArray2)


var pushValue = arr.push(6,6,6)
console.log(arr)
var pushValue = arr.pop()
console.log(arr)


//对象
var team = {
    name: "FCB",
    rank: 1,
    "from-country": "Spain"    //特殊字符使用    
}
console.log(team.name,team.rank,team["from-country"])

team.won = true //添加属性
console.log(team)
delete team.won  //删除属性
console.log(team)

var haveName = "won" in team
console.log(haveName)
var haveRank = "rank" in team
console.log(haveRank)
team.hasOwnProperty('name'); // true
team.hasOwnProperty('toString'); // false



//Map和set
var map = new Map();
var sets = new Set()
console.log(map)
console.log(sets)

var m = new Map([["Micheal",95],["Bob",100]])
console.log(m.get("Bob"))

var s1 = new Set()
var s2 = new Set([1,2,3,4])
console.log(s2)

s2.add(5)
console.log(s2)
s2.delete(1)
console.log(s2)

for(var x of s2){
    console.log(x)
}

for(var x of m){
    console.log(x[1])
}

m.forEach(function(value, key, map){
    console.log(map)
})

arr.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
});

