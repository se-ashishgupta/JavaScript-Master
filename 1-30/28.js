//primitive vs refernce data types

//premitive
let num1 = 6;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num1 is", num2);
num1++;
console.log("value of num1 is after increase", num1);
console.log("value of num1 is after increase", num2);

console.log(num1 === num2); //false

//refernce
let arry1 = ["item1", "item2"];
let arry2 = arry1;
console.log("value of num1 is", arry1);
console.log("value of num1 is", arry2);
arry1.push("item3");
console.log("value of num1 is after push", arry1);
console.log("value of num1 is after push", arry2);

console.log(arry1 === arry2); //true
