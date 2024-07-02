//TODO: Notes:
//? Date
// let dateInput1 = prompt("Enter the first date in MM/DD/YYYY format:");
// let dateInput2 = prompt("Enter the first date in MM/DD/YYYY format:");

// Days between two dates
let dateOne = new Date("01/16/2025");
let dateTwo = new Date("01/26/2025");

// Time difference
let differenceInTime = Math.abs(dateTwo.getTime() - dateOne.getTime());

// Days between two dates
let differenceInDays = Math.round(differenceInTime/ (1000 * 3600 * 24));

// Display days
//console.log("Total number of days between dates:\n" + dateOne.toDateString() + " and " + dateTwo.toDateString() + " is: " + differenceInDays + " days.");

// One day in millisons
let oneDay = 1000 * 60 * 60  * 24;
let presentDate = new Date();

// 
let christmanDay = new Date(presentDate.getFullYear(), 11, 25);

// if passed Christmas
if (presentDate.getMonth() == 11 && presentDate.getDate() > 25) {
  christmanDay.setFullYear(christmanDay.getFullYear() + 1);
}
// Convert mill to days
let result = Math.round((christmanDay.getTime() - presentDate.getTime()) / oneDay);
let finalResult = result.toFixed(0)

// Display message
// console.log(`Numder of days til christmas:
//   ${presentDate.toDateString()} and ${christmanDay.toDateString()} is: ${finalResult}`);

//? OOP - Object Orientated Programmming
// abstrastion and polymorphisum and encapsolated

function speak(line) {console.log(`The ${this.type} says ${line}`);}

let whiteRabbit = {
  type: "white",
  speak
};

let hungryRabbit = {
  type: "hungry",
  speak
};

//whiteRabbit.speak(`oh my fur and whiskers.`)
//hungryRabbit.speak(`Got any carrots?`);

let finder = {
  find(array) {
    return array.some(v => v == this.value)
  },
  value: 5
}
//console.log(finder.find([4,5]));

let object = {};
console.log(Object.getPrototypeOf(object));

// Object lit
let person = {
  name : "John",
  age: 30,
  job: "Developer"
}

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

let person2 = new Person('Bill', 25, 'Mason');

// console.log(person);
// console.log(person2);

let numberObject = {
  firstNum : 1,
  secondNum : 2
}

// console.log(numberObject.firstNum);
// console.log(numberObject.firstNum.toString());

let protoAnimal = {
  speak(line) {
    console.log(`The ${this.type} says ${line}`);
  }
};

let dog = Object.create(protoAnimal);
dog.type = "dog";
dog.speak("Ruff");

let cat = Object.create(protoAnimal);
cat.type = "cat";
cat.speak("Meow");
cat.cleanSelf = () => console.log(`Licking my fur.`);
cat.cleanSelf();

//
class Car {
  constructor(color, bodyType, numberOfSeats) {
    this.color = color;
    this.bodyType = bodyType;
    this.numberOfSeats = numberOfSeats;
  }
  // Method
  accleratem(speed) {
    console.log(`I am accelerating to ${speed} MPH.`);
  }
};

let dodgeCaravan = new Car('dark gray',' mini van', 7);
dodgeCaravan.accleratem(60);
console.log(Object.getPrototypeOf(Car) == Function.prototype());
//console.log(Object.getPrototypeOf(Object.getPrototypeOf(Car)) == Object.prototype());

// Private
class SecretiveObject {
  #getSecret() {
    
  }
}