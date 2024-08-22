// Deals cards to players from top of deck
function dealCards(numderOfCards) {
  for ( let cards = 0; cards < numderOfCards; cards++) {
    for ( let i = 0; i <players.length; i++) {
      let card = deck.shift();
      players[i].push(card);
    }
  }
  console.log(players);
}


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