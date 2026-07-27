console.log("Hello world !");

let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getHumanChoice() {
  let input = prompt("Choose rock, paper, or scissors:").trim().toLowerCase();

  while (!choices.includes(input)) {
    input = prompt("Invalid choice. Please enter rock, paper, or scissors:")
      .trim()
      .toLowerCase();
  }

  return input;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw! You both picked ${humanChoice}.`);
    return "draw";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  }

  computerScore += 1;
  console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
  return "computer";
}

function playGame(rounds = 3) {
  for (let round = 1; round <= rounds; round += 1) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Final result: You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Final result: Computer wins the game.");
  } else {
    console.log("Final result: The game is a tie.");
  }
}

playGame(3);
