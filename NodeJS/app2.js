console.log("Hello World");

console.log("Node JS - 1/9");

let a = 9;

console.log(a + 1);

function mul(number) {
	return number * number
}

console.log(mul(10));

const square2 = require("./multi")
const sub2 = require("./sub");
const divide2 = require("./sub");
const add2 = require("./sub");

console.log(sub2(55, 22));
console.log(divide2(25, 5));
console.log(add2(33, 98));

console.log(square2(5));