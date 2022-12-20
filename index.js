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

// testing different functions

// // practicing objects
// let person = {
//   name: "alaa",
//   age: 26,
//   country: "lebanon",
// };
// function logData() {
//   console.log(
//     person.name +
//       " is " +
//       person.age +
//       " years old and lives in " +
//       person.country
//   );
// }

// // testing if/else statements
// // bus ticket pricing according to age
// function ticketPricing(age) {
//   if (age < 6) {
//     console.log("free ticket");
//   } else if (age > 5 && age < 18) {
//     console.log("child discount");
//   } else if (age > 17 && age < 27) {
//     console.log("student discount");
//   } else if (age > 26 && age < 67) {
//     console.log("full price");
//   } else {
//     console.log("senior citizen discount");
//   }
// }

// // testing for loops
// // using for loop display each country on a line
// let countries = ["china", "india", "usa", "indonesia", "pakistan"];
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }

// // push()/pop()/unshift()/shift()

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// largeCountries.shift();
// largeCountries.unshift("China");
// largeCountries.pop();
// largeCountries.push("Pakistan");

// // using Math.random() to make a rock paper scissor
// let hands = ["Rock", "Paper", "Scissor"];
// function game() {
//   let i = Math.floor(Math.random() * 3);
//   return hands[i];
// }

// 4:30:47 https://www.youtube.com/watch?v=jS4aFq5-91M&t=6s
