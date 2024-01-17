alert('Welcome to the game of the secret number');
let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let guessNumber,
  tries = 1;

while (secretNumber != guessNumber) {
  guessNumber = prompt(`Type a number betwen 1 and ${maxNumber}:`);
  if (secretNumber == guessNumber) {
    break;
  } else {
    if (guessNumber > secretNumber) {
      alert(`Secret number is lower than ${guessNumber}`);
    } else {
      alert(`Secret number is bigger than ${guessNumber}`);
    }
    tries++;
    alert('Try again');
  }
}
alert(
  `Awesome, you guessed the right number: ${secretNumber}. Number of tries:${tries}`
);
