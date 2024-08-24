function dealCards(numberOfCards) {
  for (let i = 0; i < players.length; i++) {
    let playerSumSpan = document.getElementById(`player-${i + 1}-sum`);

    // Function to deal cards with a delay
    (function dealToPlayer(index, delay) {
      for (let cards = 0; cards < numberOfCards; cards++) {
        setTimeout(() => {
          let card = deck.shift();
          players[index].push(card);

          //console.log(`Player ${index + 1} receives card: ${card}`);

          // Calculate the total for the player
          let playerTotal = 0;
          for (let j = 0; j < players[index].length; j++) {
            playerTotal += getValue(players[index][j]);
          }

          // Update the sum displayed on the page
          playerSumSpan.innerHTML = playerTotal;

          // Displaying the card
          let cardImg = document.createElement("img");
          cardImg.setAttribute("class", `card-img`);
          cardImg.src = `./cards/${card}.png`;

          // Adding card to display
          document.getElementById(`player-${index + 1}-cards`).append(cardImg);
        }, cards * delay); // Delay based on card index
      }
    })(i, 500); // Delay of 0.5 seconds (500ms)
  }
}
