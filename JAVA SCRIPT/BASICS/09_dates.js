let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2004, 7, 12)
console.log(myCreatedDate);

let myCreateDate = new Date("2004-08-12")
console.log(myCreateDate);

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
  weekday : "long",
})

