//select ALL box elements with class name 'box'
let boxes = document.querySelectorAll(".box");
let infoMessage = document.querySelector(".message");
let resetBtn = document.querySelector(".reset-btn");
let clickBox = new Audio("sound-effects/button-16.wav");
let clickWin = new Audio("sound-effects/mixkit-achievement-bell-600.wav");
let clickDraw = new Audio("sound-effects/button-10.wav");

//initialise game variables
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameOver = false;

infoMessage.textContent = `Click any of the boxes to begin`;

//alternating turns between players
function switchTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2; //if player1 is done,switch to player2
  } else {
    currentPlayer = player1;
  }
  infoMessage.textContent = `It's ${currentPlayer}'s turn`;
}

function checkWinner() {
  //answers inside variable in order to win

  let winningAnswers = [
    //array within array
    [0, 1, 2], //first row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 3, 6], //left column
    [1, 4, 7], //middle column
    [2, 5, 8], //right column
    [0, 4, 8], //top left to bottom right diagonal
    [2, 4, 6], //top right to bottom left diagonal
  ];
  //LOOP through all possible winning combos
  for (let i = 0; i < winningAnswers.length; i++) {
    let winningCombo = winningAnswers[i];
    let a = winningCombo[0]; //
    let b = winningCombo[1];
    let c = winningCombo[2];
    // if the boxes' positions at A, B and C have the same symbol as currentPlayer, return true; winning answer = currentPlayer choice
    //
    if (
      boxes[a].textContent === currentPlayer &&
      boxes[b].textContent === currentPlayer &&
      boxes[c].textContent === currentPlayer &&
      boxes[a].textContent !== ""
    ) {
      //change color  only on the winning combo
      boxes[a].classList.add("win-color-change");
      boxes[b].classList.add("win-color-change");
      boxes[c].classList.add("win-color-change");
      return true;
    }
  }
  //if no conditions are met, return false
  return false;
}

// if winningAnswers conditions not met, start function
function checkDraw() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === "") {
      return false;
    }
  }
  return true;
}

//game loop
function handleClick(event) {
  if (gameOver) {
    return; // immediately stop the game
  }
  const box = event.target; // box that is clicked
  //if clicked/box not empty
  if (box.textContent !== "") {
    return;
  }
  box.textContent = currentPlayer; //set the box content to the current player X/O
  clickBox.play();
  if (checkWinner()) {
    infoMessage.textContent = `${currentPlayer} wins!`;
    gameOver = true;
    resetBtn.style.display = "block";
    clickWin.play();
    return;
  }
  if (checkDraw()) {
    infoMessage.textContent = `It's a draw!`;
    gameOver = true;
    resetBtn.style.display = "block";
    clickDraw.play();
    return;
  }
  switchTurn();
}

boxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", function () {
  resetBtn.style.display = "none";
  boxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove("win-color-change");
  });
  infoMessage.textContent = "Click any of the boxes to begin";
  gameOver = false;
});
