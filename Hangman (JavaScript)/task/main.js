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
  let hint = getMasked(guessedWord);

  while (attempts > 0) {
    console.log(`\n${hint}`);
    const enteredLetter = input(`Input a letter: `);
    attempts--;
    
    if (!(guessedWord.includes(enteredLetter))){
      console.log('That letter doesn\'t appear in the word.');
      
    } else {
      hint = getUncovered(
        enteredLetter, hint, guessedWord
      );
    }
  }
  showFinalMessage();
}

function getUncovered(letter, hint, guessedWord) {
  let pos = guessedWord.indexOf(letter);
  while (pos !== -1) {
    hint = getReplacedAt(pos, letter, hint);
    pos = guessedWord.indexOf(letter, pos + 1);
  }
  return hint;
}

function getReplacedAt(i, letter, word) {
  return word.slice(0, i) + letter + word.slice(i + 1);
}

function getMasked(word) {
  return '-'.repeat(word.length);
}

function showFinalMessage() {
  console.log('\nThanks for playing!');
}

function greet() {
  console.log('H A N G M A N');
}
