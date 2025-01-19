// Primitive Datatypes uses Stack Memory(copy)
// Non Premitive Dataypes uses Heap Memory(reference)

let myYoutubeName = "krunalsinh6212"

let anotherName = myYoutubeName
console.log(anotherName);

anotherName = "TwoSide Gamers"
console.log(anotherName);

let user = {
  email : "abc@gmail.com",
  upiId : "abc@oksbi"
}

let user2 = user

user2.email = "xyz@gmail.com"
console.log(user, user2);
