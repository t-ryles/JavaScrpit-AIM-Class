// // Deals cards to players from top of deck
// function dealCards(numderOfCards) {
//   for ( let cards = 0; cards < numderOfCards; cards++) {
//     for ( let i = 0; i <players.length; i++) {
//       let card = deck.shift();
//       players[i].push(card);
//     }
//   }
//   console.log(players);
// }


//   // Player cards
//   for ( let i = 0; i < 2; i++ ) {
//     let cardImg = document.createElement("img");
//     let card = deck.pop();
//     cardImg.src = `./cards/${card}.png`
//     // Adding to dealer sum
//     playerSum += getValue(card);
//     // Adding to ace count
//     playerAceCount += checkAce(card);
//     // Adding card to display
//     document.getElementById("player-cards").append(cardImg);
//   }
//   console.log(`Player sum : ${playerSum}`);
//let players = [['3-S', '10-S'],['3-S', '7-H'],['K-C', '8-D']];

// Empty array for players
let players = [['K-S', '7-S'], ['3-S', '7-H'], ['4-C', '8-D']]; 

function getValue(players) {
  for (let i = 0; i < players.length; i++) {
    let total = 0;

    for (let j = 0; j < players[i].length; j++) {
      let data = players[i][j].split("-");
      let value = data[0];

      if (isNaN(value)) { // Checking for A, J, Q, K
        if (value == "A") {
          total += 11;
        } else {
          total += 10;
        }
      } else {
        total += parseInt(value); // Return int of value
      }
    }

    console.log(`Player ${i + 1} total: ` + total);
  }
}

function getValue2(players) {
  for (let i = 0; i < players.length; i++) {
    let total = 0;

    for (let j = 0; j < players[i].length; j++) {
      let data = players[i][j].split("-");      
      let value = data[0];
      console.log(`Value: ${value}`);

      if (isNaN(value)) { // Checking for A
        if (value == "A") {
          total += 11;
        } else { // J, Q, K
          total += 10;
        }
      } else {
        // Return int of value
        total += parseInt(value);
      }
    }
    //console.log(`Player ${i + 1} total: ` + total);
    console.log(`getValue2 Player ${i + 1} total: ` + total);
    //return total;
  }
}

for (let i = 0 ; i < players.length; i++) {
  console.log(players[i]);
  
  console.log(getValue3(players[i]))
}

function getValue3(hand) {
  let total = 0;

  for (let i = 0; i < hand.length; i++) {
    let data = hand[i].split("-");
    let value = data[0];

    if (isNaN(value)) { // Checking for A, J, Q, K
      if (value == "A") {
        total += 11;
      } else {
        total += 10;
      }
    } else {
      total += parseInt(value); // Convert value to integer and add to total
    }
  }
  return total;
}

//getValue(players); // Should print totals for each player's hand
//getValue2(players)
getValue3(players); 