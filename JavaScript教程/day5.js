//面向对象编程

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

