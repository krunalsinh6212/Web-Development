// // singleton Object.create
// // const JsUser

// // Object Literals
// const mySys = Symbol("key1")
// const JsUser = {
//   name : "Krunalsinh Chhasatiya",
//   "user name" : "krunalsinh6212",
//   age : 20,
//   [mySys] : "mykey1",
//   location : "Bharuch",
//   email : "abc@gmail.com",
//   isLoggedIn : false,
//   lastLoginDays : ["Monday", "Saturaday"]
// }

// console.log(JsUser.email);
// console.log(JsUser['email']);

// // console.log(JsUser.user name);
// console.log(JsUser['user name']);
// console.log(JsUser[mySys]);

// JsUser.email = "xyz@gamil.com"
// // Object.freeze(JsUser) // lock object

// JsUser.greeting = function(){
//   console.log("Hello JS User");
// }
// console.log(JsUser.greeting());

// JsUser.greeting2 = function(){
//   console.log(`Hello JS User, ${this.name}`);
// }
// console.log(JsUser.greeting2());




// Part 2
// singleton
// const tinderUser = new Object()


// tinderUser.id = "123abc"
// tinderUser.name = "Pushpa Raj"
// tinderUser.isLoggedIn = true
// // console.log(tinderUser);

// const regularUser = {
//   email : "abc@gmail.com",
//   fullname : {
//     username : {
//       firstname : "Pushpa",
//       lastname : "Raj"
//     }
//   }
// }

// // console.log(regularUser.fullname.username.firstname);

// const obj1 = {
//   1 : "a",
//   2 : "b"
// }
// const obj2 = {
//   3 : "a",
//   4 : "b"
// }

// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const object3 = Object.assign({}, obj1, obj2)
// console.log(object3);

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// const users = {
//   id : 1,
//   email : "abc@gmail.com"
// }

// // users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const cource = {
  courcename : "JS",
  price : 999,
  courceinstructor : "Hitesh"
}

const {courceinstructor : instructor} = cource
// console.log(courceinstructor);
console.log(instructor);

// JSON

// {
//   "name" : "krunal",
//   "courcename" : "JS",
//   "price" : "free"
// }

// [
//   {},
//   {},
//   {}
// ]


