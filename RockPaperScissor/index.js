const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
  const random = Math.floor(Math.random() * 3);
  let result = "";

  const computerChoice = choices[random];
  if (playerChoice === computerChoice) {
    result = "Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "You Win" : "You Loose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win" : "You Loose";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "You Win" : "You Loose";
        break;
    }
  }

  switch (result) {
    case "You Win":
      playerScore++;
      playerScoreDisplay.textContent = `Player Score :${playerScore}`;
      break;
    case "You Loose":
      computerScore++;
      computerScoreDisplay.textContent = `Computer Score :${computerScore}`;
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
}
