//typeof operator

// data types
// string "hasrhit"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = "Ashish";

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof "ashish");

//convert number to string
age = age + ""; //22 -> "22"
console.log(typeof age);

age = String(age);
console.log(typeof age); //string

//convert string to number
let myStr = "34";
console.log(typeof myStr); // string
myStr = +"34";
console.log(typeof myStr); // number

myStr = Number(myStr);
console.log(myStr); //number

//parseInt and parseFloat
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
