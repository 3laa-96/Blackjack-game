// Defined Variables
let cards = [];
let sum = 0;
let message = "";
let gameOver = false;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el"); //show message for the player
let sumEl = document.getElementById("sum-el"); //show sum of cards
let cardsEl = document.getElementById("card-el"); //show cards
let playerEl = document.getElementById("player-el"); //player name + cash
let player = {
  name: "Alaa",
  chips: 150,
};

// start game button
function startGame() {
  if (sum === 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = cards[0] + cards[1];
    renderGame();
  } else if (gameOver === false && hasBlackJack === false) {
    messageEl.innerText = "The game has already started";
  } else {
    messageEl.innerText = "Game is over";
  }
}

// New card button
function newCard() {
  let Card = getRandomCard();
  if (gameOver === false && hasBlackJack === false && sum > 0) {
    sum += Card;
    cards.push(Card);
    renderGame();
  } else if (hasBlackJack === true) {
    messageEl.innerText = "You already won";
  } else if (gameOver === true) {
    messageEl.innerText = "Game is over";
  } else {
    messageEl.innerText = "You haven't started the game yet";
  }
}

// Random number generator
function getRandomCard(randomNumber) {
  randomNumber = Math.floor(Math.random() * 13) + 1;
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

// render player/chips
playerEl.textContent = player.name + " : $" + player.chips;
