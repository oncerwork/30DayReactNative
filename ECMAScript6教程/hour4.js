// 数值的扩展

console.log(0b111111110111);//二进制
console.log(0o767);//八进制

console.log(Number('0b111'));  // 二进制转为10进制
console.log(Number('0o10'));  // 8 -> 10进制

// Number.isFinite()用来检查一个数值是否为有限的（finite）。
console.log(Number.isFinite(3.14));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));

// Number.isNaN()用来检查一个值是否为NaN。
console.log(Number.isNaN(1));
console.log(Number.isNaN(NaN));

//parseInt()和parseFloat()
console.log(Number.parseInt(50.5));
console.log(Number.parseFloat("50.5?"));

//Number.isInteger() 是否为整数
console.log(Number.isInteger("50.5?"));
console.log(Number.isInteger(50));

// Number.EPSILON  表示 1 与大于 1 的最小浮点数之间的差
