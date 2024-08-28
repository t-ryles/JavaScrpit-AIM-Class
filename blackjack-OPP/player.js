import { players, deck, pot } from "./sandbox";

class Player {
  constructor(name) {
    this.name =  name;
    this.hand = [];
    this.chips = 0;
  }

  // Method to add card to players hand
  addCard() {
    let card = deck.shift
    this.hand.push(card);
  }

  // Get players card total
  getTotal() {
    let total = 0;
    let aceCount = 0;

    for (let card in this.hand ) {
      let value = card.split("-");

      if (isNaN(value)) { // Checking for A, J, Q, K
        if (value === "A") {
          total += 11;
        } else {
          total += 10;
        }
      } else {
        total += parseInt(value); // Return int of value
      }
    }
    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount--;
    }
    return total;
  }

  hit() {
    if (this.total < 21 && this.hand < 5) {
      this.addCard();
    }
  }

  stay() {
    players++;
  }

  split() {
    // Second hand for player
    let splitHand = [];

    // Get span to display total and bet

    //  Splitting hand
    splitHand.push(this.hand.pop());
  

  }

  doubleDown() {

  }

  placeBet() {
    pot += this.chips
    this.chips = 0
  }
}

export { Player }