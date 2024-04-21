//array push pop

// array shift unshift

let fruits = ["apple", "mango", "graps"];
console.log(fruits);

// // Push
// fruits.push("banana"); //add to last
// console.log(fruits);

// // pop
// let rem = fruits.pop(); // remove from last and also return removed value
// console.log("pop element:", rem);
// console.log(fruits);

// unshift
fruits.unshift("banana"); //add to first
console.log(fruits);

// shift
let rem1 = fruits.shift(); // remove from first and also return removed value
console.log("pop element from first:", rem1);
console.log(fruits);

// push and pop are faster then unshift and shift
