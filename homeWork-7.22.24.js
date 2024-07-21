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

// Going back to the Actor, Player, and Enemy classes we created in class, create another subclass of Actor called Npc. 
// Npc inherits move() and distanceTo(), and it has its own method called dialog(). 
class Npc extends Actor {
  constructor( startX, startY) {
    super(startX, startY)
  }

  distanceCheck(player) {
    // When the Player is within a distance of 1 from the Npc, the Npc should console.log(“Drink this!”) and the Player should get 5 additional hps. 
    if ( this.distanceTo ( player ) <= 1 ) {
      if ( player.hp <= 95 ) {
        this.dialog();
        // However, the Player should not go over 100 hp.
        player.hp = Math.min(player.hp + 5, 100);
      }
    }
  }

  dialog(){
    console.log("Drink this!");
  }
}

// Create a subclass of Player called Mage. Mage will inherit from Actor and Player and will have its own method called teleport(). 
class Mage extends Player {
  constructor(startX, startY, hp) {
    super(startX, startY, hp)
  }
  // When teleport() is called, the Mage’s x and y position will be changed so they are in a different position further than they would get with the move() method.
  teleport(teleportX, teleportY) {
    this.x = teleportX;
    this.y = teleportY;
  }
}


// Create a subclass of Enemy called Orc. Orc inherits from Actor and Enemy
class Orc extends Enemy {

  // It overrides the attack() method of Enemy so that an attack causes the player to lose 20 hp instead of 10.
  attack (player) {
    if (this.distanceTo(player) < 4) {
      player.hp -= 20;
      return true;
    } else {
      return false;
    }
  }
}


// Switching gears to try…catch…finally.
// Write a JavaScript function that takes a number as a parameter and throws a custom Error if the number is not an integer.
function isANumber(input) {
  try {
    typeof input == "number" 
    console.log(input);
    
    } catch (err) {
      console.log("Error: ", err);
  } finally {
    console.log('Finish running function.');
  }
}
let f;
isANumber(f);

// Write a JavaScript function that uses a try…catch block to catch and handle a Range Error when accessing an array with an invalid index.


// Write a JavaScript function that executes some code after an error occurs (can be any type of error, as long as it is one that stops execution of the script).
