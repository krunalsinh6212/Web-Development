// Immediately Invoked Function Expression (IIFE)

function chai(){ // normal function
  console.log(`DB CONNECTED`); 
}
chai();

(function chaii(){ // named iife
  console.log(`DB CONNECTED`); 
})();

( (name) => { // iife
  console.log(`DB CONNECTED ${name}`);
})("krunalsinh");