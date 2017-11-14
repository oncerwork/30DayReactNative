//面向对象编程

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

