// function sayMyName(){
//   console.log("K");
//   console.log("R");
//   console.log("U");
//   console.log("N");
//   console.log("A");
//   console.log("L");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){ //parameters
//   // console.log(number1 + number2);
//   let result = number1 + number2
//   return result
// }
// // addTwoNumbers(3,4) // argments
// const result = addTwoNumbers(3,4)
// console.log(result);

// function loginUserMessage(username){
//   if(username == undefined){
//     console.log("Please enter a username");
//     return
//   }
//   return `${username} just logged in.`
// }
// // console.log(loginUserMessage("krunalsinh"));
// console.log(loginUserMessage());


// part 2


function calculateCartPrice(val1, value2, ...num1){
  return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
  username : "krunalsinh",
  price : 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}
// handleObject(user)

handleObject({
  username : "krunal",
  price : 499
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myArray));
