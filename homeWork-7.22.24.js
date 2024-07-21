// Going back to the Actor, Player, and Enemy classes we created in class, create another subclass of Actor called Npc. 
// Npc inherits move() and distanceTo(), and it has its own method called dialog(). 
// When the Player is within a distance of 1 from the Npc, the Npc should console.log(“Drink this!”) and the Player should get 5 additional hps. 
// However, the Player should not go over 100 hp.

class Actor {
  constructor (startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  move (dx, dy) {
    this.x += dx;
    this.y += dy
  }

  distanceTo (otherActor) {
    let dx = otherActor.x - this.x;
    let dy = otherActor.y - this.y;
    // Figure out distance between actors.
    return Math.hypot(dx, dy);
  }
}

class Player extends Actor {
  constructor (startX, startY) {
      super(startX, startY);
      // Property
      this.hp = 100;
  }
}

class Enemy extends Actor {
  // Method
  attack (player) {
    if (this.distanceTo(player) < 4) {
      player.hp -= 10;
      return true;
    } else {
      return false;
    }
  }
}

class Npc extends Actor {
  constructor( startX, startY) {
    super(startX, startY)
  }

  distanceCheck(player) {
    if ( this.distanceTo ( player ) <= 1 ) {
      if ( player.hp <= 95 ) {
        this.dialog();
        player.hp += 5;
      }
    }
  }

  dialog(){
    console.log("Drink this!");
  }

}

// Create a subclass of Player called Mage. Mage will inherit from Actor and Player and will have its own method called teleport(). 
// When teleport() is called, the Mage’s x and y position will be changed so they are in a different position further than they would get with the move() method.


// Create a subclass of Enemy called Orc. Orc inherits from Actor and Enemy, but it overrides the attack() method of Enemy so that an attack causes the player to lose 20 hp instead of 10. 


// Switching gears to try…catch…finally. Write a JavaScript function that takes a number as a parameter and throws a custom Error if the number is not an integer.


// Write a JavaScript function that uses a try…catch block to catch and handle a Range Error when accessing an array with an invalid index.


// Write a JavaScript function that executes some code after an error occurs (can be any type of error, as long as it is one that stops execution of the script).
