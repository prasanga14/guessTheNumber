'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);

*/

//We dont create secret Number inside event handling function as it changes the secret number in every click which makes no sense to the game that we are building

// Math.random() generates random number between o and 1 with decimal values
// (Math.random() * 20) + 1 => This gives random numbers between 1 and 20 with decimals.
// Math.trunc(Math.random() * 20) + 1 => Here trunc removes the decimal values, so we get values between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // We used let because we cant change const
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 😢';

    // When player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number ✔✔';

    document.querySelector('body').style.backgroundColor = '#00e200';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game! 🤢';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When the Guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game! 🤢';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // When the Guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game! 🤢';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
