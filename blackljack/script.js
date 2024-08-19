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
  console.log(deck);
}