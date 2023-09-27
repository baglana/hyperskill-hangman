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
  let attempts = 8;
  const hint = getMasked(guessedWord);

  while (attempts > 0) {

    showHint(hint);
    const enteredLetter = input(`Input a letter: `);
    attempts--;
    
    if (guessedWord.includes(enteredLetter)){
      uncoverLetter(
        enteredLetter, hint, guessedWord
      );
    } else {
      console.log('That letter doesn\'t appear in the word.');
    }

  }
  showFinalMessage();
}

function showHint(hint) {
  console.log(`\n${hint.join('')}`);
}

function uncoverLetter(letter, hint, guessedWord) {
  let pos = guessedWord.indexOf(letter);
  while (pos !== -1) {
    replaceAt(pos, letter, hint);
    pos = guessedWord.indexOf(letter, pos + 1);
  }
}

function replaceAt(i, letter, word) {
  word[i] = letter;
}

function getMasked(word) {
  return new Array(word.length).fill('-');
}

function showFinalMessage() {
  console.log('\nThanks for playing!');
}

function greet() {
  console.log('H A N G M A N');
}
