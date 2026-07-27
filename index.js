let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanScore >= 5 || computerScore >= 5) return;

  const roundResult = document.getElementById("round-result");
  const scoreDisplay = document.getElementById("score");
  const winnerDisplay = document.getElementById("winner");

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    winnerDisplay.textContent = "You won the game!";
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "Computer won the game!";
  }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("round-result").textContent = "Click a button to start!";
  document.getElementById("score").textContent = "Player: 0 | Computer: 0";
  document.getElementById("winner").textContent = "";
});
