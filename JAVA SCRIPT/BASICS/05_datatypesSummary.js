// Primitive Datatypes
/*
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// Reference Datatypes(Non Premitive)
/*
Array, Objects, Functions
*/

const score = 100
const scoreValue = 100.50
const isLoggedIn = true
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = BigInt(2203051050315)
const bigNum = 165468542186542n


const heroes = ['Shaktiman', 'Naagraj', 'Doga'] //arrays
let myObject = {
  name : "Krunalsinh Chhasatiya",
  age : 20, 
} // object

const myFunction = function(){
  console.log("Hello");
  
} // function

console.log(typeof myObject.age);

console.log(typeof myFunction); // function object