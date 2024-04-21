//undefined
var firstName;
console.log(typeof firstName);
firstName = "Ashish";
console.log(firstName, typeof firstName);

//null
var firstName = null;
console.log(typeof firstName);
firstName = "Ashish";
console.log(firstName, typeof firstName);

//type of null
console.log(typeof null); //object - its a bugg

//BigInt
let myNumber = BigInt(12);
let samerMyNumber = 123n; // BigInt

console.log(myNumber + samerMyNumber); // only Bigint type data peroform arithmetic operation with each other
