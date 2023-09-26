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
  let maskedWord = getMasked(guessedWord);

  while (attempts > 0) {
    console.log(`\n${maskedWord}`);
    const enteredLetter = input(`Input a letter: `);

    if (!(guessedWord.includes(enteredLetter))){
      console.log('That letter doesn\'t appear in the word.');
      attempts--;

    } else {
      maskedWord = getRevealed(
        enteredLetter, maskedWord, guessedWord
      );
    }
  }
  showFinalMessage();
}

function getRevealed(letter, maskedWord, guessedWord) {
  revealedWord = [...maskedWord];
  revealedWord.forEach((l, i) => {
    if (guessedWord.charAt(i) === letter) {
      revealedWord[i] = letter;
    }
  });
  return ''.concat(...revealedWord);
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
