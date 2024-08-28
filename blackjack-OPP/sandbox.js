import { Dealer } from "../blackjack-OPP/dealer";
import { Player } from "./player";

let pot = 0;
let players = [];
let usedCards = [];
let betBTN = document.getElementById('Bet').addEventListener('click', this.placeBet);
let hitBTN = document.getElementById('hit').addEventListener('click', this.hit);
let stayBTN = document.getElementById('stay').addEventListener('click', this.stay);
let splitBTN = document.getElementById('split').addEventListener('click', this.split);


window.onload = function() {

  // Getting the number of players
  let numOfPlayers = prompt(`Please enter the number of players: `)
  for ( let i = 0; i < numOfPlayers; i++) {
    let playerName = `player-${i+1}`;
    // Assgining name to playes
    players.push(new Player(playerName));
  }

  buildDeck();
  shuffleDeck();
  buildPlayers();
  checkDeck();
}

// Build deck
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

function checkDeck() {
  if (deck.length < 65) {
    buildDeck(7);
    shuffleDeck();
  }
}

export { players, deck, pot, buildDeck, shuffleDeck, checkDeck };