"use strict";

function getComputerChoice() {
  let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * 3);
  return rockPaperScissors[random];
}

function getHumanChoice() {
  let userChoice = prompt("(Rock, Paper, Scissors) Pick One:");
  return userChoice.toUpperCase();
}

function showTheResult(result, humanChoice, computerChoice) {
  switch (result) {
    case "Win":
      alert(`You Win! ${humanChoice} beats ${computerChoice}
        "Your Score: ${humanScore}
        Computer Score: ${computerScore}`);
      break;
    case "Lost":
      alert(`You Lost! ${computerChoice} beats ${humanChoice}
        Your Score: ${humanScore}
        Computer Score: ${computerScore}`);
      break;
    case "Draw":
      alert(`Draw!
        Your Score: ${humanScore}
        Computer Score: ${computerScore}`);
  }
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        console.log("Draw!");
        showTheResult("Draw");
      } else if (computerChoice === "PAPER") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        showTheResult("Lost", humanChoice, computerChoice);
      } else if (computerChoice === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
        showTheResult("Win", humanChoice, computerChoice);
      }
      break;

    case "PAPER":
      if (computerChoice === "ROCK") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
        showTheResult("Win", humanChoice, computerChoice);
      } else if (computerChoice === "PAPER") {
        console.log("Draw!");
        showTheResult("Draw");
      } else if (computerChoice === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
        showTheResult("Lost", humanChoice, computerChoice);
      }

      break;

    case "SCISSORS":
      if (computerChoice === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        showTheResult("Lost", humanChoice, computerChoice);
      } else if (computerChoice === "PAPER") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
        showTheResult("Win", humanChoice, computerChoice);
      } else if (computerChoice === "SCISSORS") {
        console.log("Draw!");
        showTheResult("Draw");
      }
      break;
  }
}
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;
let computerScore;
let humanScore;

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(humanSelection(), computerSelection());
  }

  if (humanScore > computerScore) {
    alert(`WINNER WINNER CHICKEN DINNER!
Your Score: ${humanScore}
Computer Score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`GAME OVER!
Your Score: ${humanScore}
Computer Score: ${computerScore}`);
  } else {
    alert(`WHAT A DRAW!!!
Your Score: ${humanScore}
Computer Score: ${computerScore}`);
  }
}
playGame();
