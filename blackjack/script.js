// Point value of dealer and player
let dealerSum = 0;
let playerSum = 0;

// Dealer and player  ace count
let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

// Allows player to draw card while playerSum <= 21
let canHit = true;

window.onload = function() {
  buildDeck();
  shuffleDeck();
  startGame();
}

function buildDeck() {
  let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let suites = ["C", "D", "H", "S"];

  deck = [];

  for (let s = 0; s < suites.length; s++) {
    for (let v = 0; v < values.length; v++ ) {
      deck.push(values[v] + "-" + suites[s]);
    }
  }
  //console.log(deck);
}

function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);

    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  console.log(deck);
}

function startGame() {
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  //console.log(hidden);
  //console.log(dealerSum);

  while (dealerSum < 17) {
    // Dealer cards
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = `./cards/${card}.png`
    // Adding to dealer sum
    dealerSum += getValue(card);
    // Adding to ace count
    dealerAceCount += checkAce(card);
    // Adding card to display
    document.getElementById("dealer-cards").append(cardImg);
  }
  console.log(`Dealer sum : ${dealerSum}`);
  
  // Player cards
  for ( let i = 0; i < 2; i++ ) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = `./cards/${card}.png`
    // Adding to dealer sum
    playerSum += getValue(card);
    // Adding to ace count
    playerAceCount += checkAce(card);
    // Adding card to display
    document.getElementById("player-cards").append(cardImg);
  }
  console.log(`Player sum : ${playerSum}`);

  // Functionality to hit and stay button
  document.getElementById('hit').addEventListener("click", hit);
  document.getElementById('stay').addEventListener("click", stay);

}

function hit() {
  if (!canHit) {
    return;
  }

  let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = `./cards/${card}.png`
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);

  if (reduceAce(playerSum, playerAceCount) > 21 ) {
    canHit = false;
  }
}

function stay(){
  dealerSum = reduceAce(dealerSum, dealerAceCount);
  playerSum = reduceAce(playerSum, playerAceCount);
  //console.log(`Player sum : ${playerSum}`);
  canHit = false;
  document.getElementById('hidden').src = `./cards/${hidden}.png`;
  let message = "";

  // Displaying message
  if ( playerSum > 21) {
    message = "You lose."
  }
  else if ( dealerSum > 21) {
    message = "You win!"
  }
  else if ( dealerSum == playerSum) {
    message = "House wins!"
  }
  else if ( playerSum > dealerSum ) {
    message = 'You win!'
  } 
  else if ( playerSum < dealerSum ) {
    message = "You lose."
  }

  document.getElementById('dealer-sum').innerHTML = dealerSum;
  document.getElementById('player-sum').innerHTML = playerSum;
  //console.log(`Player sum : ${playerSum}`);
  document.getElementById('results').innerHTML = message;
}

function getValue(card) {
  let data = card.split("-");
  let value = data[0];

  if (isNaN(value)) { // Checing for A, J, Q, K
    if (value == "A") {
      return 11;
    }
    return 10;
  }
  return parseInt(value); // Return int of value
}

function checkAce(card) {
  if (card[0] == "A"){
    return 1;
  }
  return 0;
}

function reduceAce(playerSum, playerAceCount) {
  while ( playerSum > 21 && playerAceCount > 0 ) {
    playerSum -= 10;
    playerAceCount -= 1;
  }
  return playerSum;
}

// JS sleep or sweep fuctions