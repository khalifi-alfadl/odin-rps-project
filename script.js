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
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let computerChoiceConverted;

  switch (computerChoice) {
    case 1:
      computerChoiceConverted = "rock";
      return computerChoiceConverted;
      break;
    case 2:
      computerChoiceConverted = "paper";
      return computerChoiceConverted;
      break;
    case 3:
      computerChoiceConverted = "scissors";
      return computerChoiceConverted;
      break;
    default:
      computerChoiceConverted = "unknown";
      console.log("Invalid selection made");
  }
}

function getHumanChoice(input) {
  const humanChoice = prompt("Enter input:")?.trim().toLowerCase();

  switch (humanChoice) {
    case "rock":
      return humanChoice;
      break;
    case "paper":
      return humanChoice;
      break;
    case "scissors":
      return humanChoice;
    default:
      console.log("Please enter a proper input");
  }
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(`Player chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection));
    console.log(
      `Current Score - Player: ${humanScore} | Computer: ${computerScore}`,
    );
  }

  if (humanScore > computerScore) {
    console.log(
      `You won the game. Final Score: ${humanScore} - ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost loser and the computer won! Final score: ${computerScore} - ${humanScore}`,
    );
  } else {
    console.log(`Tie. Final score: ${humanScore} - ${computerScore}`);
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
