//  字符串的扩展

let string = "\u0061"
console.log(string);

let a = "\u{20BB7}"
console.log(a);

let b = "\u{41}\u{42}"
console.log(b);

//2. CoeePointAt()
var c = "𠮷"
console.log(c,c.length);
c.charAt(0)
c.charAt(1)
c.charCodeAt(0)
c.charCodeAt(1)
console.log(c,c.length);

// 3 字符串的遍历器接口
for(let codePoint of 'foo'){
    console.log(codePoint);
}

//At
console.log("cbd".charAt(0));

//
console.log("Hello world".startsWith("H"));
console.log("Hello world".endsWith("rld"));
console.log("Hello world".includes("rld"));


console.log("Hello world".startsWith("H",1));
console.log("Hello world".endsWith("rld"));
console.log("Hello world".includes("rld"));

//Repeat（）
var d = 'x'.repeat(100)
console.log(d);
var e = 'y'.repeat(3.14)
console.log(e);
var f = 'z'.repeat("5")
console.log(f);

//padStart(), padEnd()  如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
var g = 'x'.padStart(6,'/|')
console.log(g)
var h = 'x'.padEnd(6,'|/')
console.log(h)

//模板字符串
// $('#result').append(`
// This is a good game <b>${basket.game}</b> and score is ${basket.score}
// `);

console.log(`In JS '\n' is a line-feed`);
console.log(`In JS this
not a line-feed`);

let name = 'huanhuan' , score = 100
console.log(`I miss ${name} ${score} times i day`)

function fn(){
    return "hello world";
}
console.log(`my first code is ${fn()}`)


const tmpl = addrs => `
<table>
${addrs.map(addr => `
  <tr><td>${addr.first}</td></tr>
  <tr><td>${addr.last}</td></tr>
`).join('')}
</table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));

console.log(String.raw`Hi\n${2+3}!`);

alert`111`