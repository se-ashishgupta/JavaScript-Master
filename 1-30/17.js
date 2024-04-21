//nested if else

let winningNumber = 19;
let userGuess = +prompt("Guess a Number"); // get value in string formate and convert to number

if (userGuess === winningNumber) {
  console.log("your guess is right!!19");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!");
  } else {
    console.log("too High !!");
  }
}
