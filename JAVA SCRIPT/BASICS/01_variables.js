const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "123"
accountCity = "Bharuch"
let accountState;

// accountId = 2 
accountEmail = "xyz@gmail.com"
accountPassword = "789"
accountCity = "Surat"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

