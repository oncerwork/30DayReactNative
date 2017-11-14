//面向对象编程

<<<<<<< HEAD
// 不过，在JavaScript中，这个概念需要改一改。JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。

var Robot = {
    name:'Robot',
    height: 1.6,
    run:function(){
       console.log(this.name + ' is runging');
    }
};

Robot.run()

var xiaomingR = {
    name: "小明"
};
xiaomingR.__proto__ = Robot;//继承自RObotxiaoming的原型指向了对象Student
xiaomingR.run();
console.log(xiaomingR.height)


var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};
xiaomingR.__proto__ = Bird;
xiaomingR.fly();


//
function createStudent(name) {
    var s = Object.create(Robot);
    s.name = name;
    return s;
}    
var huanhuan = createStudent("huanhuan");
huanhuan.run();
=======
function Student(props){
    this.name = props.name || "匿名";
    this.grade = props.grade
}

Student.prototype.HELLO = function() {
    alert("hello "+ this.name);
}
function createStudent(props){
    return new Student(props || {});
}

// 可以用关键字new来调用这个函数，并返回一个对象
var yiyi = createStudent({
    name:'一一'
});
yiyi.HELLO()

function PrimaryStudent(props){
    Student.call(this, props);
    this.grade = props.grade || 1;
}
function F(){

}

F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

//类 真是太好用了

class Students {
    constructor(name){
        this.name = name;
    }
    //方法不需要function关键字
    hello(){
        alert('Hello '+ this.name);
    }
}
var huanhuan = new Students('欢欢');
huanhuan.hello()

//类的集成
class PriStudents extends Students{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }
    myGrade(){
        alert("I am at grade "+this.grade);
    }
}
var an = new PriStudents("AN",12);
an.myGrade()
>>>>>>> f09d3604d0ac87fc0dbe17c980749eada28e76d2

