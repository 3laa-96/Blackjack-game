let cards = [10, 9];
let Card = 2;
let sum = cards[0] + cards[1];
let message = "";
let hasBlackjack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}
function renderGame() {
  if (sum < 21) {
    message = "Do you want another card ?";
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "Congrats you got a black jack !";
    hasBlackJack = true;
  } else {
    message = "Bust";
    isAlive = false;
  }
  messageEl.innerText = message;
  sumEl.innerText = "Sum :" + " " + sum;

  cardsEl.textContent = "Cards :";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  sum += Card;
  cards.push(Card);
  renderGame();
}
