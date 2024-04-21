// How to clone Array;

let arry1 = ["item1", "item2"];

// let arry2 = ["item1", "item2"];

// let arry2 = arry1.slice(0);
// arry2.push("item3");

// let arry2 = [].concat(arry1);
// arry2.push("item3");

// let arry2 = [...arry1]; //spread operator

// let arry2 = arry1.slice(0).concat(["item3","item4"]);
// let arry2 = [].concat(arry1).concat(["item3", "item4"]);
let arry2 = [...arry1, "item3", "item4"];

console.log(arry1 === arry2);
console.log("value of num1 is", arry1);
console.log("value of num1 is", arry2);

//how to concatenate two arrays

let arry3 = ["item1", "item2"];
let arry4 = ["item3", "item4"];

let arry5 = [...arry3, ...arry4];
console.log("value of num1 is", arry5);
