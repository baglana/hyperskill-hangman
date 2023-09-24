// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

greet();
playGame("python");

function playGame(guessedWord) {
  const playerGuess = input("Guess the word: ");
  if (playerGuess === guessedWord) {
    showWinMessage();
  } else  {
    showLostMessage();
  }
}

function showWinMessage() {
  console.log("You survived!");
}

function showLostMessage() {
  console.log("You lost!");
}

function greet() {
  console.log("H A N G M A N");
  console.log("The game will be available soon.");
}
