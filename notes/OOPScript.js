// OOP Game

//Declare class
// class Player {
//   constructor (startX, startY) {
//     this.x = startX;
//     this.y = startY;
//   }

//   move (dx, dy) {
//     // d is just delta, for change in value
//     this.x += dx;
//     this.y += dy
//   }
// }

// // Create instance of player
// let player1 = new Player(0,0);
// let player2 = new Player(2,1);


class Actor { // Abstract class -> player will be instantied classes
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

// Player inherits from Actor -> extends
class Player extends Actor {
  constructor (startX, startY) {
      super(startX, startY);
      // Property
      this.hp = 100;
  }
}
//TODO: Make subclasses of Player class : Witch, Elf, Centaur

// Enemy inherits from Actor -> extends
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
//TODO: Make subclasses of Enemy class : Troll, Demon, Harpy

// Instance of player and enemy
let player = new Player(1,2);
let enemy = new Enemy(3,4);

//! Prototype Based inheritance
function Cat(name) {
  this.name = name;
}

Cat.prototype.sayHello = function() {
  console.log(`Meow! My name is ${this.name}.`);
}

// Instance of cat
let kiki = new Cat("Kiki");
kiki.sayHello(); // Meow! My name is Kiki.

// Class
class Dog {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Woof! My name is ${this.name}!`);
  }
}

let felix = new Dog("Felix")
felix.sayHello();

// Object literal
let person = { name : "Nick", age : 39 }

//Overriding methods
let moona = new Cat("Moona");
moona.sayHello = function() {
  //Shawdoing
  console.log(`HELLO! I''m ${this.name.toUpperCase()}!`);
}

moona.sayHello();
kiki.sayHello();

let ruffman = new Dog("Ruff Ruffman");
ruffman.sayHello = function() {
  console.log(`Hi, my name is ${this.name}. I host a show called Fetch with ${this.name}!`);
}

ruffman.sayHello();
felix.sayHello();