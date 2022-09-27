'use strict';

// 1. UNDERSTAND THE PROBLEM
// - Create a function called computerSelection that will randomly return either 'Rock', 'Paper' or 'Scissors' (RPS).
// - Write a function that plays a single round of RPS. The function should take two parameters - the playerSelection and computerSelection - and then return a string that delcares the winner of the round like so: "You lose! Paper beats Rock!"
// - Make your function's playerSelection paramter case-insensitive (so users can input rock, ROCK, rocK etc.)
// - Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// 2. PLAN

// 3. SUB-PROBLEMS

// - Create a computerSelection function and playerSelection function
// - Within that function, make it so the function randomly returns either 'Rock', 'Paper' or 'Scissors'.
// - Create a playRound function that has two parameters: playerSelection and computerSelection
// - In that function, return a string that declares the winner of the round (i.e. You lose! Paper beats Rock!)
// - Create a new function "game()"
// - Call the playRound function inside of this one
// - It needs to play a 5 round game that keeps track of the score.
// - Return the winner and the loser at the end.

// Choices to choose from for the game
const choices = ['Rock', 'Paper', 'Scissors'];
const winners = [];
let playerScore = 0;
let computerScore = 0;

// function startGame() {
//   for (let i = 1; i <= 5; i++) {
//     playRound(i); // inputs the round number each time until it reaches round 5.
//   }
//   document.querySelector('button').textContent = 'Play new game';
//   logWins();
// }

// variables that manipulate the DOM
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');
// const buttons = document.querySelectorAll('button');

function playRound(round) {
  const playerChoice = playerSelection();
  // console.log(playerChoice);
  const computerChoice = computerSelection();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  logRound(playerChoice, computerChoice, winner, round);
}

// This function prompts the user to choose either rock, paper or scissors.
function playerSelection() {
  let input = prompt('Please type either Rock, Paper or Scissors');
  while (input == null) {
    input = prompt('Please choose either Rock, Paper or Scissors');
  }

  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      'Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization does not matter.'
    );
    while (input == null) {
      input = prompt('Please type either Rock, Paper or Scissors.');
    }
    input = input.toLowerCase(); // any input entered is automatically lowercased
    check = validateInput(input);
  }
  return input;
}
// computerSelection function that returns either rock, paper or scissors
function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)]; // returns either rock, paper or scissors
}

// function validateInput() to validate that the user input is either R, P or S.
function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    const p = document.createElement('p');
    p.innerText = `Tie! You both picked ${choiceC && choiceP}.`;
    outcomeDiv.appendChild(p);
  } else if (
    (choiceP === 'Rock' && choiceC === 'Scissors') ||
    (choiceP === 'Paper' && choiceC === 'Rock') ||
    (choiceP === 'Scissors' && choiceC === 'Paper')
  ) {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = `You win! ${choiceP} beats ${choiceC}.`;
    outcomeDiv.appendChild(p);
  } else {
    computerScore++;
    const p = document.createElement('p');
    p.innerText = `You lose! ${choiceC} beats ${choiceP}.`;
    outcomeDiv.appendChild(p);
  }
}

// A filter array that looks for "items" related to the desired variable. If the item does not equal the desired result, it throws it away.
// function logWins() {
//   let playerWins = winners.filter(winner => winner == 'Player').length;
//   let computerWins = winners.filter(winner => winner == 'Computer').length;
//   let ties = winners.filter(winner => winner == 'Tie').length;
//   console.log('Results');
//   console.log('Player Wins:', playerWins);
//   console.log('Computer Wins:', computerWins);
//   console.log('Ties:', ties);
// }

// Computes in the console the round number, what the player chose, what the computer chose, and the winner of that round.
// function logRound(playerSelection, computerSelection, winner, round) {
//   // change to DOM
//   console.log(`Round: ${round}`);
//   console.log(`Player chose: ${playerSelection}`);
//   console.log(`Computer chose: ${computerSelection}`);
//   console.log(`The winner of this round is: ${winner}`);
//   console.log('--------------------------------------');
// }

const checkScore = (playerScore, computerScore) => {
  const h2 = document.createElement('h2');
  if (playerScore === 5) {
    h2.classList.add('player-won');
    h2.innerText = `You Won! ${playerScore} to ${computerScore} - Great job!`;
    outcomeDiv.append(h2);
  } else if (computerScore === 5) {
    h2.classList.add('computer-won');
    h2.innerText = `You Lost! ${playerScore} to ${computerScore} - Better luck next time!`;
    outcomeDiv.append(h2);
  }
};

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}             `;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}                `;
};

// Event Listeners for each Button
rockButton.addEventListener('click', () => {
  const computerChoice = computerSelection();
  const playerChoice = 'Rock';
  checkWinner(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  checkScore(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
  const computerChoice = computerSelection();
  const playerChoice = 'Paper';
  checkWinner(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  checkScore(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = computerSelection();
  const playerChoice = 'Scissors';
  checkWinner(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  checkScore(playerScore, computerScore);
});
