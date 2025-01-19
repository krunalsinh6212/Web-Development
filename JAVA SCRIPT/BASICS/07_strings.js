const name = "krunalsinh"
const repocount = 50
console.log(name + " " + repocount)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('krunalsinh')
console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newString1 = "    krunalsinh   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://krunalsinh.com/krunal%20sinh"
console.log(url.replace('%20','-'));

console.log(url.includes('krunal'));

const game = "krunal-sinh-chhasatiya"
console.log(game.split('-'));
