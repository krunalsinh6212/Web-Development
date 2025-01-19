let score = "33abc"
let s = null
let d = undefined
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof NaN);
console.log(typeof score);

let valueInNull = Number(s);
console.log(typeof valueInNull);

let valueInUndefined = Number(d);
console.log(typeof valueInUndefined);

// "33" - 33
// "33abc" - NaN(Not A Number)
// true - 1; false - 0
// "" - false
// "krunal" - true


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********** Operations ***********

let value = 3
let negValue = -value
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "Hello"
let str2 = " Krunalsinh"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log("1" + "2");
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 +  "2");


console.log(true);
console.log(+true);
console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter);
