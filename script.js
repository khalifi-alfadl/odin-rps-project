// main button querySelectors
const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");

//querySelectors inside resultsDiv
const resultsDiv = document.querySelector(".results");

const roundOutcome = resultsDiv.querySelector(".round-outcome");
const scoreboard = resultsDiv.querySelector("scoreboard");
const winnerAnnouncement = resultsDiv.querySelector("winner-announcement");

//scorekeepers
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let winner = undefined;

  const winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (winningMoves[humanChoice] === computerChoice) {
    humanScore++;
    return "Player wins";
  } else if (winningMoves[computerChoice] === humanChoice) {
    computerScore++;
    return "Computer wins";
  } else {
    return "INVALID";
  }
}

function updateResultsDisplay(roundMessage) {
  roundOutcome.textContent = roundMessage;
  scoreboard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    winnerAnnouncement.textContent = "Match over: You won the game.";
  } else if (computerScore === 5) {
    winnerAnnouncement.textContent = "Match over: The computer won the game.";
  }
}

//PLACE HOLDER EVENT LISTENERS//
rockBtn.addEventListener("click", () => alert());
paperBtn.addEventListener("click", () => alert());
scissorsBtn.addEventListener("click", () => alert());
