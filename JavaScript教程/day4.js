console.log(typeof 111)
console.log(typeof "String")

var n = new Number(123)
console.log(n)
var s = new String("String")
console.log(s)


var date = new Date()
console.log(date.getFullYear())
console.log(date.getTime())

var newDate = new Date(2017,10,14,5,30,00)
console.log(newDate)
console.log(newDate.toDateString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toUTCString())

if(Date.now){
    console.log(Date.now());
}else{
    console.log(Date.getTime());
}

// JSON序列化

var huan = {
    name: " 欢欢",
    age: 31,
    height: 175,
    "middle-school": "\"W3C \" Middle School ",
    skills:['Java', 'Java', 'Python']
};

var json = JSON.stringify(huan,null,"  ");
console.log(json)

//过滤 json
var json1 = JSON.stringify(huan, ["skills","middle-school"] ,"  ");
console.log(json1)

//使用方法 过滤
function convert(key ,value){
    if(typeof value === 'string'){
        return value.toUpperCase()
    }
    return value
}

var json2 = JSON.stringify(huan,convert,'   ')
console.log(json2)


// 反序列化
console.log(JSON.parse("[1,2,3,4]"))
var jason =  JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
console.log(jason)

var jasoning = JSON.parse('{"name":"小明","age":14}', function(key ,value){
   if(key === 'name'){
       return value+ 'Sir'
   }
   return value;
});
console.log(jasoning);