let secretNumber = generateSecretNumber();
let tries = 1;

function showTextOnScreen(text, tag) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

showTextOnScreen('Secret Number Game', 'h1');
showTextOnScreen('Choose a number between 1 and 10:', 'p');

function generateSecretNumber() {
  return parseInt(Math.random() * 10 + 1);
}

function newGame() {
  alert('The secret number is changed.');
  tries = 1;
  secretNumber = generateSecretNumber();
}

function verifyTry() {
  let tryNumber = document.querySelector('input').value;
  if (tryNumber == secretNumber) {
    alert(`Awesome you guessed it right. Number of tries: ${tries}`);
    return alert('Click on New Game to change the number!')
  } else if (tryNumber > secretNumber) {
    alert('Your guess is bigger than the secret number.');
  } else {
    alert('Your guess is lower than the secret number.');
  }
  tries++;
  return alert('Try again');
}
