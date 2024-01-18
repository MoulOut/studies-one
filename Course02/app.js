let secretNumber = generateSecretNumber();
let tries = 1;

function showTextOnScreen(text, tag) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

function showInitialMessage() {
  showTextOnScreen('Secret Number Game', 'h1');
  showTextOnScreen('Choose a number between 1 and 10:', 'p');
}

showInitialMessage();

function generateSecretNumber() {
  return parseInt(Math.random() * 10 + 1);
}

function newGame() {
  tries = 1;
  secretNumber = generateSecretNumber();
  showInitialMessage();
  cleanField();
  toggleNewGame();
}

function verifyTry() {
  let tryNumber = document.querySelector('input').value;
  if (tryNumber == secretNumber) {
    showTextOnScreen(`Congratulations!`, 'h1');
    showTextOnScreen(`You discovered the Secret Number!.Tries: ${tries}`, 'p');
    toggleNewGame();
    return;
  } else if (tryNumber > secretNumber) {
    showTextOnScreen('The secret number is lower than your guess.', 'p');
  } else {
    showTextOnScreen('The secret number is bigger than your guess.', 'p');
  }
  tries++;
  cleanField(tryNumber);
  return showTextOnScreen('Try again!', 'h1');
}

function cleanField() {
  tryNumber = document.querySelector('input');
  tryNumber.value = '';
}

function toggleNewGame() {
  document.querySelector('button#reiniciar').toggleAttribute('disabled');
}
