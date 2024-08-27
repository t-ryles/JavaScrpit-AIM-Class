// Dealer and player ace count
let playerAceCount = 0;

//Point value of dealer and player
let dealerSum = 0;
let dealerAceCount = 0;
let dealerHand = [];

// Player count
let players = [];

// Used card deck
let usedCard = [];

let hidden;
let deck;

// Allows player to draw card while playerSum <= 21
let canHit = true;
let allStay = false;

window.onload = function() {
  startGame();
  shuffleDeck();
  
  let numOfPlayers = parseInt(prompt("Please enter the number of players (1 - 4): "));
  for (let i = 0; i < numOfPlayers; i++) {
    players.push([]);
  }

  let numOfDecks = parseInt(prompt("Please enter the number of decks: "));
  buildDeck(numOfDecks);
  console.log(deck.length);
  

  buildPlayers(numOfPlayers);
  dealersHand();
  dealCards();
}

function startGame() {
    // Functionality to hit and stay button
    document.getElementById('newGame').addEventListener("click", newHand);
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
  for (let i = 0; i < deck; i++) {
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
    dealerHand.push(card);
    cardImg.src = `./cards/${card}.png`
    // Adding to dealer sum
    dealerSum += getValue(card);
    // Adding to ace count
    dealerAceCount += checkAce(card);
    // Adding card to display
    document.getElementById("dealer-cards").append(cardImg);

    soft17();
  }
  console.log(`Dealer hand : ${dealerHand}`);
  console.log(`Dealer sum : ${dealerSum}`);
}

function soft17(){
  let randomNum = Math.floor(Math.random()* 10) + 1;

  if (dealerSum === 17 && dealerAceCount > 1 && randomNum % 3 == 0) {
    dealerAceCount -= 1;
    dealerSum -= 10;

    let cardImg = document.createElement("img");
    let card = deck.shift();
    dealerHand.push(card);
    cardImg.src = `./cards/${card}.png`
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
  }
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

function hit(index) {
  console.log(index);
  console.log(players);

      if (!canHit) {
        return;
      }
    
      let cardImg = document.createElement("img");
      let card = deck.pop();
      cardImg.src = `./cards/${card}.png`;

      console.log(players[index]);
      

      players[index].push(card);

      console.log(players[index]);
      let playerSumSpan = document.getElementById(`player-${index+1}-sum`);
      playerSumSpan += getValue(card);
      playerAceCount += checkAce(card);
      cardImg.setAttribute("class", `card-img`);
      document.getElementById(`player-${index + 1}-cards`).append(cardImg);
    
      if (reduceAce(playerSumSpan, playerAceCount) > 21 ) {
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
function dealCards() {
  for ( let i = 0; i < players.length; i++) {
    // Get player span ID
    let playerSumSpan = document.getElementById(`player-${i+1}-sum`);

    (function dealToPlayer(i, delay) {
      for ( let cards = 0; cards < 2; cards++) {
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

    checkDeck();
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

    let playerHitBTN = document.createElement("button");
    playerHitBTN.setAttribute("id", `player-${i+1}-hit`);
    playerHitBTN.setAttribute("class", `button`);
    playerHitBTN.setAttribute("class", `hit`);
    playerHitBTN.textContent = 'Hit';

    let playerStayBTN = document.createElement("button");
    playerStayBTN.setAttribute("id", `player-${i+1}-stay`);
    playerStayBTN.setAttribute("class", `button`);
    playerStayBTN.setAttribute("class", `stay`);
    playerStayBTN.textContent = 'Stay';

    playerDiv.appendChild(playerHitBTN);
    playerDiv.appendChild(playerStayBTN);
    // Append playerDiv to playersBox
    playersBox.appendChild(playerDiv);

    playerHitBTN.addEventListener('click', function() {
      let index = parseInt(`${i}`);
      //console.log(`${i}`);
      hit(index);
    });

    playerStayBTN.addEventListener('click', function(){
      console.log(`player[${i}]`);
    });

  }
}
// Dealing a new hand without restarting the game
function newHand() {
  for ( let i = 0; i < players.length; i++) {
    for ( let j = 2; j > 0; j--) {
      usedCard.push(players[i].pop());
    }
    console.log(players);
  }
  console.log(`Ouside for loop` + players);
  console.log(usedCard);
  console.log(deck);
  clearCardImgs();
  dealersHand();
  dealCards(2);
  checkDeck();
}

function clearCardImgs() {
  for (let i = 0; i < players.length; i++) {
    const playerImg = document.getElementById(`player-${i+1}-cards`);
    let image = playerImg.querySelector('img');
  
    while (image) {
      playerImg.removeChild(image)
      image = playerImg.querySelector('img');
    }
  }
}

function checkDeck() {
  if (deck.length < 65) {
    buildDeck(7);
    shuffleDeck();
  }
}

// JS sleep or sweep fuctions