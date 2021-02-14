// Genrator
function *helloWorldGenerator(name){
    yield name;
    return name;
}
console.log('------------------------------------');
console.log(helloWorldGenerator('你好'));

//类
// （1） 介绍
class Point{
    // constructor方法，这就是构造方法
    constructor(x,y){
        this.x = x;//this关键字则代表实例对象
        this.y = y;
    }
    // 定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错
    toString(){
        return '('+this.x+ ','+ this.y+')';
    }
}
var point = new Point(1,2)
console.log(point.x);
console.log(point.y);
console.log(point.toString());
console.log(typeof(Point));

// Construntor 方法
// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
// constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象

class Foo{
    constructor(){
        return Object.create(Number);
    }
}

// 类的表达式
const MyClass = class Me{
    getClassname(){
        return Me.name;
    }
}
// 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类
var my = new MyClass();
console.log(my.getClassname());

// 如果内部没有用到Me，可以忽略使用下面的定义

const YourClass = class{

}

//表达式声明类，立即执行的类
let person = new class{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}('HH');
person.sayName();

// Getter SEtter方法
class Group{
    constructor(team){
        this.team = team;
    }
    get prop(){
        return "getter"
    }

    set prop(value){
        console.log('setter '+ value);
    }
}

let team = new Group('Barca')
team.prop = 1024
console.log(team.prop)

// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Food{
    static foodName(){
        console.log('------------------------------------');
        console.log('Rice');
        console.log('------------------------------------');
    }
}

Food.foodName()

//类的继承
class BAR{
    sayGO(){

    }
}
class BARCA extends BAR{
    constructor(x,y){
        super(x,y);
        this.x = x;
        this.y = y;
    }
}
let barca = new BARCA(1,5);
console.log(barca.x)