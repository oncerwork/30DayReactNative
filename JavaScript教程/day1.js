
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

