const myarr = [0, 1, 2, 3, 4, 5]
console.log(myarr[0]);

const myheroes = ["Shaktiman", "Hanuman"]
const myArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods

myarr.push(6)
myarr.push(7)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(9)
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));

console.log(myarr.indexOf(9));

const newarr = myarr.join()
console.log(newarr);

// Slice or Splice

console.log("A ", myarr);
const myn1 = myarr.slice(1, 3)
console.log(myarr);
console.log(myn1);


const myn2 = myarr.splice(1, 3)
console.log(myn2);

// part 2
const marvel_heroes = ["Thor", "ironMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Krunalsinh"));
console.log(Array.from("Krunalsinh"));

console.log(Array.from({name : "Krunalsinh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
