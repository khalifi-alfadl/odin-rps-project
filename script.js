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

/**
 * Plays a single round of RPS against the user.
 *
 * updates the display message after each round.
 *
 * has a safeguard that stops the function if either humanScore or computerScore reaches 5.
 *
 * @param { "rock" | "paper" | "scissors" } humanChoice
 * @returns {void}
 */
function playRound(humanChoice) {
  const winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();
  let message = "";

  if (humanChoice === computerChoice) {
    updateResultsDisplay(`Tie. Both picked ${humanChoice}`);
  } else if (winningMoves[humanChoice] === computerChoice) {
    humanScore++;
    message = `User won. User picked ${humanChoice} and computer picked ${computerChoice}`;
  } else if (winningMoves[computerChoice] === humanChoice) {
    computerScore++;
    message = `Computer won. User picked ${humanChoice} and computer picked ${computerChoice}`;
  }

  updateResultsDisplay(message);
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
