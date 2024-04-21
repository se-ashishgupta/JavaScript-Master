//Intro to arrays
//reference type
//how to create arrays
//array indexing

//ordered collection of items
//mutable
let fruits = ["apple", "mango", "graps"];
let obj = {};
let numbers = [1, 2, 3, 4];
let mix = ["apple", "mango", "graps", 1, 2, 3, 4, null, undefined];

console.log(fruits[0]);
console.log(mix);

//array is reference type ---> to jo reference hote hai n vo object hote hai
console.log(typeof fruits);
console.log(typeof obj);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));
