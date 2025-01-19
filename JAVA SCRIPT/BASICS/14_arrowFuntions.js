// const user = {
//   username : "krunal",
//   price : 999,
//   welcomeMessage : function(){
//     console.log(`${this.username}, Welcome to Website`);
//     console.log(this);
    
//   }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// 
// method 1

// function chai(){
//   let username = "krunal"
//   console.log(this.username);
// }
// chai()

// method 2

// const chai = function(){
//     let username = "krunal"
//     console.log(this.username);
//   }
//   chai()

// method 3

// const chai = () => {
//   let username = "krunal"
//   console.log(this.username);
// }
// chai()


const addTwo = (num1, num2) => {
  return num1 + num2
}
console.log(addTwo(3, 4));


const addtwo = (num1, num2) => num1 + num2

console.log(addtwo(3, 4));

// const myarr = [2, 3, 4, 5, 6 ]
// myarr.forEach()