//  剪头函数
 
var fn = x => x*x
console.log(fn(10))

var PI = () => 3.14
console.log(PI())

var XFunction = X => {
    if(X>0){
        return X*X;
    }else{
        return - X*X
    }
}
console.log(XFunction(5))

//可变参数
var MulPar = (x,y,...rest) =>{
    var i, sum = x+y;
    for(i = 0; i< rest.length;i++){
        sum += rest[i];//rest 是数组形式
    }
    return sum;
}
console.log(MulPar(1,2,3,34,4,45,5));

//generator

function * foo(x){
    yield x+1;
    yield x+2;
    return x+3;
}

// 
function fib(Max){
    var x = 0 , y = 1;
    var arr =[x, y]
    var next = x + y;
    while(next < Max){
        var next = x + y;        
        arr.push(next);
        x = y;
        y = next;
    }
    console.log(arr);
}

fib(100)


function* FIB(Max){
    var x = 0 , y = 1;
    var arr =[x, y]
    var next = x + y;
    while(next < Max){
        yield x;
        var next = x + y;        
        arr.push(next);
        x = y;
        y = next;
    }
    return arr;
}

var fibx = FIB(100);
console.log(fibx.next());
console.log(fibx.next());
console.log(fibx.next());
console.log(fibx.next());
console.log(fibx.next());

for(var x of fibx){
    console.log(x);
}
