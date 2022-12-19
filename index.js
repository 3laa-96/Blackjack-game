// Defined Variables

let cards = [];
let sum = 0;
let message = "";
let gameOver = false;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

// start game button
function startGame() {
  if (sum === 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = cards[0] + cards[1];
    renderGame();
  } else {
    messageEl.innerText = "The game has already started";
  }
}

// New card button
function newCard() {
  let Card = getRandomCard();
  if (gameOver === false) {
    sum += Card;
    cards.push(Card);
    renderGame();
  } else if (hasBlackJack === true) {
    messageEl.innerText = "You already won";
    gameOver = true;
  } else if (gameOver === true) {
    messageEl.innerText = "Game is over";
  } else {
    messageEl.innerText = "You haven't started the game yet";
  }
}

// Random number generator
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber >= 11) {
    return 10;
    // in case the player gets king,queen or jack
  } else if (randomNumber === 1) {
    return 11;
    // in case the player gets an ace
  } else return randomNumber;
}

// Rendering game
function renderGame() {
  if (sum < 21) {
    message = "Do you want another card ?";
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "Congrats you got a black jack !";
    hasBlackJack = true;
    gameOver = true;
  } else {
    message = "Bust";
    gameOver = true;
  }
  messageEl.innerText = message;

  cardsEl.textContent = "Cards :";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.innerText = "Sum :" + " " + sum;
}

// test roll dice function
function rollDice() {
  return Math.floor(Math.random() * 5 + 1);
}

// Testing logical operations

let colorIsBlack = true;
let conditionIsNew = false;

if (colorIsBlack === true && conditionIsNew === true) {
  console.log("true");
} else {
  console.log("false");
}
