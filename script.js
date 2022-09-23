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
const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function startGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(i); // inputs the round number each time until it reaches round 5.
  }
  document.querySelector('button').textContent = 'Play new game';
  logWins();
}
// - calls the playRound function
// - Plays 5 round games and keeps track of the score
// - returns the winner and loser at the end

// playRound function that:
function playRound(round) {
  const playerChoice = playerSelection();
  // console.log(playerChoice);
  const computerChoice = computerSelection();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  logRound(playerChoice, computerChoice, winner, round);
}
// - has two parameters: playerSelection and computerSelection
// - return a string that declares the winner of the round.

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
    return 'Tie!';
  } else if (
    (choiceP === 'rock' && choiceC === 'scissors') ||
    (choiceP === 'paper' && choiceC === 'rock') ||
    (choiceP === 'scissors' && choiceC === 'paper')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}
// A filter array that looks for "items" related to the desired variable. If the item does not equal the desired result, it throws it away.
function logWins() {
  let playerWins = winners.filter(winner => winner == 'Player').length;
  let computerWins = winners.filter(winner => winner == 'Computer').length;
  let ties = winners.filter(winner => winner == 'Tie').length;
  console.log('Results');
  console.log('Player Wins:', playerWins);
  console.log('Computer Wins:', computerWins);
  console.log('Ties:', ties);
}

// Computes in the console the round number, what the player chose, what the computer chose, and the winner of that round.
function logRound(playerSelection, computerSelection, winner, round) {
  console.log(`Round: ${round}`);
  console.log(`Player chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  console.log(`The winner of this round is: ${winner}`);
  console.log('--------------------------------------');
}
