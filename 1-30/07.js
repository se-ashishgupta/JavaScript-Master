// Some String methods

let firstName = " ashisH          "; // string is immutable
console.log(firstName.length);
firstName = firstName.trim(); //return new string with removed space
console.log(firstName.length);

firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// start index
// end index

let firstName1 = firstName.slice(2, 4); // slice give string from start index to end index-1
console.log(firstName1);

let firstName2 = firstName.slice(1);
console.log(firstName2);

// start index
// length
let firstName3 = firstName.substr(2, 4); // slice give string from start index and upto no of element
console.log(firstName3);

let firstName4 = firstName.substr(1);
console.log(firstName4);
