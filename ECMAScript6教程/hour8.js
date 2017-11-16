// Symbol
let s = Symbol()
console.log(typeof(s))

// 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
// Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
let s1 =Symbol('s1')
console.log(s1)

//Set和Map数据结构
