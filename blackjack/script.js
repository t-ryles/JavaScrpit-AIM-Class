// Point value of dealer and player
let dealerSum = 0;
let playerSum = 0;

// Fake player count
let players = []; 

// Dealer and player  ace count
let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

// Allows player to draw card while playerSum <= 21
let canHit = true;

window.onload = function() {
  buildDeck(7);
  shuffleDeck();
  
  let numOfPlayers = parseInt(prompt("Please enter the number of players: "));
  for (let i = 0; i < numOfPlayers; i++) {
    players.push([]);
  }
  
  buildPlayers(numOfPlayers);
  dealCards(2);
  dealersHand();
  newHand();
}

function buildDeck(numofDeck) {
  let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let suites = ["C", "D", "H", "S"];
  deck = [];

  for (let i = 0 ; i < numofDeck; i++) {
    let subDeck = []
    
    for (let s = 0; s < suites.length; s++) {
      for (let v = 0; v < values.length; v++ ) {
        subDeck.push(values[v] + "-" + suites[s]);
      }
    }
    deck = deck.concat(subDeck);
  }  
}

function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);

    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function dealersHand() {
  hidden = deck.shift();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  while (dealerSum < 17) {
    // Dealer cards
    let cardImg = document.createElement("img");
    let card = deck.shift();
    cardImg.src = `./cards/${card}.png`
    // Adding to dealer sum
    dealerSum += getValue(card);
    // Adding to ace count
    dealerAceCount += checkAce(card);
    // Adding card to display
    document.getElementById("dealer-cards").append(cardImg);
  }
  console.log(`Dealer sum : ${dealerSum}`);

  // Functionality to hit and stay button
  document.getElementById('hit').addEventListener("click", hit);
  document.getElementById('stay').addEventListener("click", stay);

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
  document.getElementById('results').innerHTML = message;
}

function getValue(card){
    let total = 0;
    let data = card.split("-");
    let value = data[0];

  if (isNaN(value)) { // Checking for A, J, Q, K
    if (value === "A") {
      total += 11;
    } else {
      total += 10;
    }
  } else {
    total += parseInt(value); // Return int of value
  }
  return total;
}

// Deals cards to players from top of deck
function dealCards(numderOfCards) {
  for ( let i = 0; i < players.length; i++) {
    // Get player span ID
    let playerSumSpan = document.getElementById(`player-${i+1}-sum`);

    (function dealToPlayer(i, delay) {
      for ( let cards = 0; cards < numderOfCards; cards++) {
        setTimeout(() => {
          let card = deck.shift();
          players[i].push(card);

          let playerTotal = 0;
          for (let j = 0; j < players[i].length; j++) {
          playerTotal += getValue(players[i][j])
      }
      // Setting player card sum
      playerSumSpan.innerHTML = playerTotal;

      let cardImg = document.createElement("img");
      // Adding card CSS class
      cardImg.setAttribute("class", `card-img`);
      cardImg.src = `./cards/${card}.png`
      // Adding to ace count
      playerAceCount += checkAce(card);
      // Adding card to display
      document.getElementById(`player-${i+1}-cards`).append(cardImg);
    }, cards * delay);
    }
  })(i, 1000);
    }
  }

// Adding players to HTML
function buildPlayers(numOfPlayers) {
  for (let i = 0; i < numOfPlayers; i++) {
    // Getting Div for players 
    let playersBox = document.getElementById('playersBox');

    // Building a player's div
    let playerDiv = document.createElement("div");

    // Setting id to player DIV
    playerDiv.setAttribute("id", `player-${i+1}-div`);

    // Building H2 for player DIV
    let playerH2 = document.createElement("h2");

    // Setting H2 ID
    playerH2.setAttribute("id", `player-${i+1}-h2`);

    // Appending h2 to the playerDiv
    playerDiv.appendChild(playerH2);

    // Build span for H2
    let playerSpan = document.createElement("span");

    // Setting ID for player span
    playerSpan.setAttribute('id', `player-${i+1}-sum`);

    // Append span to H2
    playerH2.appendChild(playerSpan);

    // Building Div for cards
    let playerCardDiv = document.createElement("div");

    // Setting id to player card DIV
    playerCardDiv.setAttribute("id", `player-${i+1}-cards`);

    // Append playerCardDiv to playerDiv
    playerDiv.appendChild(playerCardDiv);

    // Append playerDiv to playersBox
    playersBox.appendChild(playerDiv);
  }
}

function newHand(players) {
  let usedCard = [];

  for ( let i = 0; i < players.length; i++) {
    for ( let j = 0; j < players[i].length; j++) {
      usedCard.push(players[i][j].pop());
    }
  }
}

// JS sleep or sweep fuctions