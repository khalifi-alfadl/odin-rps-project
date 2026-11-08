let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");

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
  let humanScore = 0;
  let computerScore = 0;

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

//PLACE HOLDER EVENT LISTENERS//
rockBtn.addEventListener("click", () => alert());
paperBtn.addEventListener("click", () => alert());
scissorsBtn.addEventListener("click", () => alert());
