// Defined Variables
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let message = "";
// let hasBlackjack = false;  TEMP
// let isAlive = true;  TEMP
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

// start game button
function startGame() {
  renderGame();
}

// New card button
function newCard() {
  let Card = getRandomCard();
  sum += Card;
  cards.push(Card);
  renderGame();
}

// Random number generator
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber >= 11) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

// Rendering game
function renderGame() {
  if (sum < 21) {
    message = "Do you want another card ?";
    // hasBlackJack = false;  TEMP
  } else if (sum === 21) {
    message = "Congrats you got a black jack !";
    // hasBlackJack = true;  TEMP
  } else {
    message = "Bust";
    // isAlive = false;  TEMP
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
