const input = require('sync-input')

greet();
let gamesWon = 0;
let gamesLost = 0;

let userChoice;
do {
  showMenu();
  userChoice = input();
  switch (userChoice) {
    case 'play':
      playGame(getRandomWord());
      break;

    case 'results':
      showResults(gamesWon, gamesLost);
      break;

    case 'exit':
      break;

    default:
      console.warn(`Unexpected input: ${userChoice}`);
      break;
  }
} while (userChoice !== 'exit');

function showResults(gamesWon, gamesLost) {
  console.log(`You won: ${gamesWon} times.`);
  console.log(`You lost: ${gamesLost} times.`)
}

function showMenu() {
  console.log('Type "play" to play the game,'
    + ' "results" to show the scoreboard,'
    + ' and "exit" to quit:')
}

function getRandomWord() {
  const words = ['python', 'java', 'swift', 'javascript'];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function playGame(guessedWord) {
  let attempts = 8;
  const suggestedLetters = [];
  const uncoveredLetters = [];
  let hint = getMasked(guessedWord, uncoveredLetters);

  while (attempts > 0) {
    showHint(hint);
    const userInput = input(`Input a letter: `);

    const userInputIsValid = validateUserInput(
      userInput, suggestedLetters
    );
    if (!userInputIsValid) continue;

    const enteredLetter = userInput;

    if (guessedWord.includes(enteredLetter)) {

      const wasUncoveredBefore = uncoveredLetters.includes(enteredLetter);
      if (wasUncoveredBefore) {
        console.log('No improvements.');
        attempts--;
      } else {
        uncoveredLetters.push(enteredLetter);
      }

    } else {
      console.log('That letter doesn\'t appear in the word.');
      attempts--;
    }

    hint = getMasked(guessedWord, uncoveredLetters);
    const wordIsUncovered = !hint.includes('-');
    if (wordIsUncovered) {
      showWinMessage(guessedWord);
      gamesWon++;
      break;
    }

  }
  if (!attempts) {
    showLostMessage();
    gamesLost++;
  }
}

function validateUserInput(input, suggestedLetters) {
  if (input.length !== 1) {
    console.log('Please, input a single letter.');
    return false;
  }

  const lowerEnglish = /[a-z]/;
  if (!(lowerEnglish.test(input))) {
    console.log('Please, enter a lowercase letter from the English alphabet.');
    return false;
  }

  if (suggestedLetters.includes(input)) {
    console.log('You\'ve already guessed this letter.');
    return false;
  }

  suggestedLetters.push(input);
  return true;
}

function showHint(hint) {
  console.log(`\n${hint}`);
}

function getMasked(word, uncoveredLetters) {
  return [...word].reduce((hint, letter) => {
    return hint.concat(
      uncoveredLetters.includes(letter) ? letter : '-'
    );
  }, '');
}

function showWinMessage(word) {
  console.log(`You guessed the word ${word}!`)
  console.log('You survived!');
}

function showLostMessage() {
  console.log('\nYou lost!');
}

function greet() {
  console.log('H A N G M A N');
}