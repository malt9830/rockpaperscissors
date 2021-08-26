document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", shapeChosenPlayer);
  });
});

//Variables for chosen shapes and array of choices
let playerChoice;
let computerChoice;
let shapes = ["rock", "paper", "scissors"];
let win = document.querySelector("#win");
let loss = document.querySelector("#lose");
let draw = document.querySelector("#draw");
let messages = [win, loss, draw];

function shapeChosenPlayer() {
  //Reset hands
  document.querySelectorAll(".player").forEach((hand) => {
    hand.style.backgroundImage = "url(hand_rock.png)";
    hand.classList.remove("shake");
    hand.offsetHeight;
  });
  //Clear text
  messages.forEach((message) => {
    message.classList.add("hidden");
  });

  playerChoice = this.className;

  shapeChosenComputer();
}

function shapeChosenComputer() {
  computerChoice = shapes[Math.floor(Math.random() * 3)];

  startShaking();
}

function startShaking() {
  document.querySelectorAll(".player").forEach((hand) => {
    hand.classList.add("shake");
  });

  document
    .querySelector("#player1")
    .addEventListener("animationend", showChoices);
}

function showChoices() {
  document.querySelector(
    "#player1"
  ).style.backgroundImage = `url(hand_${playerChoice}.png)`;

  document.querySelector(
    "#player2"
  ).style.backgroundImage = `url(hand_${computerChoice}.png)`;

  endGame();
}

function endGame() {
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      draw.classList.remove("hidden");
    } else if (computerChoice == "paper") {
      loss.classList.remove("hidden");
    } else if (computerChoice == "scissors") {
      win.classList.remove("hidden");
    }
  }

  if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      win.classList.remove("hidden");
    } else if (computerChoice == "paper") {
      draw.classList.remove("hidden");
    } else if (computerChoice == "scissors") {
      loss.classList.remove("hidden");
    }
  }

  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      loss.classList.remove("hidden");
    } else if (computerChoice == "paper") {
      win.classList.remove("hidden");
    } else if (computerChoice == "scissors") {
      draw.classList.remove("hidden");
    }
  }
}
