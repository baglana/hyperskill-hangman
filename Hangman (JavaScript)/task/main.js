// Use 'input()' to input a line from the user
// Use 'input(str)' to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

greet();
playGame(getRandomWord());

function getRandomWord() {
  const words = ['python', 'java', 'swift', 'javascript'];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function playGame(guessedWord) {
  const maskedWord = getMaskedWord(guessedWord);
  const playerGuess = input(`Guess the word ${maskedWord}: `);
  if (playerGuess === guessedWord) {
    showWinMessage();
  } else  {
    showLostMessage();
  }
}

function getMaskedWord(word) {
  const letters = [...word];
  letters.fill('-', 3);
  return ''.concat(...letters);
}

function showWinMessage() {
  console.log('You survived!');
}

function showLostMessage() {
  console.log('You lost!');
}

function greet() {
  console.log('H A N G M A N');
  console.log('The game will be available soon.');
}
