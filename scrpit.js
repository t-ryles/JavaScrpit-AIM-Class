let car = "Audi";
// console.log(car);

var total = 0;
total = total + 2;
total += 3;
total ++;
// console.log(total)

// I want to say it is chilly if it less than 40 degrees outside
// let temp = 32;
// if( temp < 40) {
//   console.log('Brrr, it\'s chilly')
// }

let temp = 42;
if( temp < 40) {
  //console.log('Brrr, it\'s chilly')
}

temp = 40;
if( temp <= 40) {
  //console.log('Brrr, it\'s chilly')
}

// Createing temp function
function tempCheck(temp){
  if( temp <= 40) {
    console.log('Brrr, it\'s kind of chilly')
  }
}

// Calling funciton
//tempCheck(0)
// tempCheck(32)
// tempCheck(40)
// tempCheck(55)

function checkCreditHealth(cardbalance, numOfLoans) {
  if (cardbalance > 5000 && numOfLoans > 7) {
    console.log('I am in trouble');
  }
}

// checkCreditHealth(6000, 8)
// checkCreditHealth(5000, 8)
// checkCreditHealth(6000, 7)

function checkCreditHealth2(cardbalance, numOfLoans){
  if (cardbalance > 5000 && numOfLoans > 7) {
    console.log('I am in some trouble');
  } else {
    console.log('I am doing okay credit wise.');
  }
}

// checkCreditHealth2(6000, 8)
// checkCreditHealth2(5000, 8)
// checkCreditHealth2(6000, 6)

function pickHairColor(mood){
  if( mood == 'Happy') {
    console.log("I want green hair today.");
  } else if (mood == 'Sad') {
    console.log("I want blue hair today");
  }
}

// pickHairColor('Happy');
// pickHairColor('Sad');
// pickHairColor('Angry')

function checkGrade(score) {
  if (score >= 90) {
    console.log('I got an A!');
  } else if ( score >= 80) {
    console.log('I got an B!');
  } else if ( score >= 70) {
    console.log('I got an C!');
  } else if ( score >= 60) {
    console.log('I got an D!');
  } else {
    console.log('I failed!');
  }
}

// checkGrade(91)
// checkGrade(81)
// checkGrade(71)
// checkGrade(61)
// checkGrade(51)

// switch (score) {
//   case:
//       ...
//   case:
//       ...
//   default:
//       ...
// }

function getTodaysClass(dayOFWeek){
  switch(dayOFWeek) {
    case 'Monday' :
      console.log("Today is Science Class.");
      //break;
    case 'Tuesday' :
      console.log("Today is Algebra Class.");
      break;
    case 'Wednesday' :
      console.log("Today is Science Lab.");
      break;
    case 'Thursday' :
      console.log("Today is History Class.");
      break;
    case 'Friday' :
      console.log("Today is a study day.");
      break;
    case 'Saturday':
    case 'Sunday':
      console.log('Hooray, it\'s the weekend.');
      break;
    default:
      console.log('You didn\'t give a day of the week');
  }
}

// getTodaysClass('Monday');
// getTodaysClass('Thursday')
// getTodaysClass('Saturday')
// getTodaysClass('Sunday')
// getTodaysClass('Hot Girl')

var fruits = ['Apple','Orange','Banana','Kiwi','Watermelon'];

//console.log(fruits[0]);
//console.log(fruits[3]);

function printFruits(fruits){
  for(let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i} is ${fruits[i]}`);
  }
}

//printFruits();

function printFruits2(fruits){
  for(let i = fruits.length - 1; i >= 0 ; i--) {
    console.log(`Fruit ${i} is ${fruits[i]}`);
  }
}

//printFruits2();

// let cars = ['Audi','Chrysler','Ford','Honda','Subaru', 'Toyota']
// printFruits2(cars)

function isDivisibleByFive() {
  for ( let i = 1; i <= 30; i += 3) {
    if(i % 5 == 0) {
      console.log(`${i} is divisible by 5`);
    } else {
      console.log(`${i} is not divisible by 5`);
    }
  } 
}
//isDivisibleByFive();

// Notes 6/10/2024
let age = "25"
function sendMessageBasedOnAge(age) {
  switch(age) {
    case 25:
      console.log("Looking great!");
      break;
    case 50:
      console.log("Getting up there, aren't you.");
      break;
    default:
      console.log("Man you are old!"); 
  }
}
//sendMessageBasedOnAge(age)


function containsletter(str){
  let letter = 's';
  let count = 0;
  for ( let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      console.log("Yes");
      break;
    } else if (i == str.length) {
      console.log("No.");
    }
  }
}
//containsletter('Mesopotamia')

function countToTwentyByThree() {
  for( i = 1; i <= 20 ; i++) {
    if (i % 3 == 0) {
      continue;
    } else {
      console.log('i is ' + i);
    }
  }
}
//countToTwentyByThree();

function sayHi() {
  let name = prompt('What is your name?')
  console.log(`Hi, ${name}`);
}

//sayHi();

// While true do this
 //let num = prompt(`Give a number to count down from.`)

// while (num > 4 ) {
//   console.log (`The number is ${num}.`)
//   num--;
// }
// console.log(`I don't like to count below 4.`);

// Do while
// do {
//   console.log(`The number is ${num}.`);
//   num--;
// } while (num > 4);
// console.log(`I don't like to count below 4.`);

// Function delecration
function getBalanceOfAccount(deposit, withdrawl){
  let balance = deposit - withdrawl;
  return balance;
}

//! Function expresssion
let bal = getBalanceOfAccount(150, 100)
//console.log(`Your balance is $${bal}.`);

let favoriteFood = function() {
  let name = prompt("What is your name?")
  if (name == 'David') {
    return("Tacos");
  } else{
    return("Pizza");
  }
}
//console.log(`My favorite food is ${favoriteFood()}`);

// Hosting
var x = 10;
//console.log(`x is ${x}`);
// Step 1: var x
// Step 2: x = 10
// Step 3: console.log(x)

//console.log( `y = ${y}`);
var y = 20;
// Step 1: var y
// Step 2: console.log(y)
// Step 3: y = 20

//console.log(`z = ${z}`);
let z = 30;

//countTheMummies(20);

function countTheMummies(numOfMummies) {
  if (numOfMummies > 15) {
    console.log(`I am going to die.`);
  } else if (numOfMummies >= 1) {
    console.log(`Maybe I can run away!`);
  } else {
    console.log(`Thanks goodness, no Mummies`);
  }
}

//countTheVombies(14);

var countTheVombies = function(numOfVombies){
  if(numOfVombies > 15) {
    console.log(`Argh! Zombies!`);
  } else if(numOfVombies >= 1){
    console.log('To many Zombies for my taste.');
  } else {
    console.log(`No zombies!`);
  }
 }


//! Scope
/// Global scope
 function getGroceries(day) {
  if (day == 'wednesday') {
    console.log('I need to buy ' + fruits[2]);
  } else if ( day == 'friday') {
    console.log(`Today I will buy ${fruits[1]} and ${fruits[4]}`);
  } else {
    console.log('Not shopping today.');
  }
 }

//  getGroceries('tuesday');
//  getGroceries('friday');
//  getGroceries('wednesday');

function getAreaOfHouse(len, wid) {
  let area = len * wid
 }

 //getAreaOfHouse();
 //console.log(`The area of the house is ${area}`);

 /// Function Scope
 function functionScopeExample() {
  var depoisteAmount = 200;
  if (depoisteAmount < 10000) {
    var isInsured = true;
  }
  console.log(`Deposite amount is ${depoisteAmount}`);
  console.log(`Is the depsote amount insured? ${isInsured}`);
 }

//functionScopeExample();

 //! Block Scope ; let and const can't be accessed outside of code block.
function blockScopeExample(risk) {
  let depoisteAmount = 200;
  if (depoisteAmount < 10000) {
    let isInsured = true;
    if(risk == 1) {
      isInsured = false; // lexisco scope
      console.log(`What is isInsured? ${isInsured} `);
    }
    console.log(`The deposite amount is ${depoisteAmount}`);
  }
  console.log(`Deposite amount is ${depoisteAmount}`);
  // console.log(`Is the depsote amount insured? ${isInsured}`);
 }

// blockScopeExample();
// blockScopeExample(1);

//* Notes 6/12/2024
//? Named fuction
// function calculateTip(preTip, tipPercent) {
//   const tipResult = preTip * tipPercent;
//   return tipResult;
// }

const preTipTotal = 100.00;
const tipPercentage = .15;
// const tipCost = calculateTip(preTipTotal, tipPercentage); // Named function

// const totalBill = preTipTotal + tipCost;
// console.log(`Your total bill is $${totalBill}.`);

//? Annon function

// const tipCost = function(preTip, tipPercentage) { // Anonymons function
//   const tipResult = preTip * tipPercentage;
//   return tipResult;
// } 

// const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage)
// console.log(`Your total bill is $${totalBill}.`)

//? Arrow Function : ([arg])=> { [JS Statments] }

const tipCost = (preTip, tipPercentage) => {
  //const tipResult = preTip * tipPercentage;
  return tipResult = preTip * tipPercentage;
}
const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
//console.log(`Your total bill is $${totalBill}.`);

const roundTwo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
  // condition t or f ? if True : False
}
//console.log(roundTwo(41,3));

//* Arrow functions tricks
const sum = (num1, num2) => num1 + num2;
const square = num => num * num;
const addTwoNumbers = () => 5 + 3;

//? Objects
// Objects have properties and methods( functions)
const vehicle = {
  name: 'Fait',
  model: '500',
  weight: 850,
  color: 'White',
  start(speed) {
    console.log(`Starting car.`);
    for( let i = 0; i <= speed; i += 5) {
      console.log(`Accelerating at ${i} mph.`);
    }
    console.log(`Readched desired speed.`);
  },
  makeAndModel: function () {
    return this.name + " " + this.model;
  },
  weightInKg: () => {
    // Arrow functions has no reference to this.
    return vehicle.weight + 'kg'
  }
}
// -> Accessing objects
// objName.Property -> dot notation
// objName['property']
// objName[expression]

//console.log(`My newest car is a ${vehicle.color} ${vehicle.makeAndModel()}.`);
// vehicle.makeAndModel is function hints the ()
//console.log(`My ${vehicle.name}'s weight is ${vehicle.weightInKg()}`);
//console.log(vehicle.start(55));

const adult = { firstName: 'Bob', lastName: 'Ross', age: 50, eyeColor: 'Blue'}

//? Creating pbjects
const duck1 = {}; // Prefered way
const duck2 = new Object();

duck1.color = 'Magenta'
//console.log(duck1);
let duck1Color = duck1['color']
//console.log(duck1Color);

const person = {
  name: 'Bill',
  age: 54,
  2: 'Thompson',
  'Joe Cool': 'Snoopy'
}

// Adding properties to Objects
//console.log(person);
person.jeanSize = 42
//console.log(person);
//console.log(person['name']); // Bracket notation
person.country = 'USA';
//console.log(person);
person.name = 'John'
//console.log(person);

let i = 'Joe Cool';
//console.log(person[i]);

person[i] = 'Spike';
//console.log(person);

// Delete property
delete person.name;
// console.log(person.name);
// console.log(person);

//console.log('country' in person) // Return t or f if '' is in object
//console.log('name' in person)

//! Accesing properties within Objects
//console.log(Object.keys(person));
//console.log(person.2); // incorrect
//console.log(person[2]);
//person.2 = 'Johnson' // incorrect
person[2] = 'Johnson';
//console.log(person);
//person.'2' = 'Baird'; // incorrect
person['2'] = 'Baird';
//console.log(person);
person[1 + 1] = 'Smith';
//console.log(person);
//person.Joe Cool = 'Sunny'; // incorrect
//person."Joe Cool"= 'Sunny'; // incorrect
//person[Joe Cool] = 'Sunny'; // incorrect
person["Joe Cool"] = 'Sunny';
//console.log(person);

const mySelf = {
  name : 'John',
  age: 30,
  myCars: {
    car1: 'Ford',
    car2: 'BMW',
    car3: 'Fiat'
  },
  myClasses: [
    {
      className: 'Science',
      roomNumber : '102',
      teacher: `O'Brady`
    },
    {
      className: 'History',
      roomNumber: '303',
      teacher: `Hanon`,
      gpa: 3.5
    }
  ]
}

let venue = 'QUEST CENTER';
let venueFormatted = venue.toLowerCase();
//console.log(venueFormatted);

let price = 5.8679132;
let priceFormatted = price.toFixed(2);
//console.log(priceFormatted);

//? Arrays
// Adding to array
const treeFruits = ['Apple', 'Banana', 'Orange']
// console.log(treeFruits.length); // length of array
// console.log(treeFruits);
// treeFruits.push('Kiwi')
// console.log(treeFruits);
// treeFruits.pop(); // remove last
// console.log(treeFruits);
// console.log(treeFruits.length);
treeFruits[3] = 'Dragon Fruit'
// console.log(treeFruits);
treeFruits[4] = 'Peach'
// console.log(treeFruits);

// const treeFruitsStr = treeFruits.toString();
// console.log(treeFruitsStr); // Array to string

// treeFruits.sort(); // Alphbetical order
// console.log(treeFruits);
// console.log(treeFruits[treeFruits.length - 1]);

// Looping
treeFruits.forEach((item, index) => {
  //console.log(`Item number ${index + 1}: ${item}.`);
})

let myFruit = treeFruits[2];
//console.log(myFruit);
let yourFruit = treeFruits.at(2);
//console.log(yourFruit);
let hisFruit = treeFruits.at([-1]);
//console.log(hisFruit);

//console.log(treeFruitsStr1 = treeFruits.toString());
//console.log(treeFruitsStr1 = treeFruits.join('*'))

//Shift - acts one the beginning of the array
treeFruits.shift();
// console.log(treeFruits);
// console.log(treeFruits.length);

//Unshift
treeFruits.unshift('Lemon');
// console.log(treeFruits);
// console.log(treeFruits.length);

// Concat : creates new arry from two or more arrys
const children = ['Joseph', 'Bethany', 'Zackary'];
const adults = ['Amy', 'Andrea', 'Ingrid']
const myParents = ['Errol', 'Frances']
const myRelatives = children.join(adults, myParents);
// console.log(myRelatives);
// console.log(children);
// console.log(adults);

const myKin = myRelatives.concat('Eric');
// console.log(myKin);

const testScores = [[99,100], [86, 92], [77,79]]
// console.log(testScores);

const newTestScores = testScores.flat();
// console.log(newTestScores);

//* Notes 6/17/24
// Arry mutated methods vs. unmutaded methods
const pantsArr = ['Haggar', 'Levis', 'Docker','UnionBay']
// console.log(pantsArr);
pantsArr.pop(); // UnionBay
// console.log(pantsArr)
pantsArr.push('Lee');
// console.log(pantsArr)
pantsArr.shift(); // Haggar
// console.log(pantsArr);
pantsArr.unshift('Sonoma');
// console.log(pantsArr);

//? Array.splice(str, del, element1, element2 ...)
const hatsArr = ['Baseball', 'Bucket', 'Boonie', 'Straw', 'Boater', 'Beret']
// console.log(hatsArr);

hatsArr.splice(2,1)
// console.log(hatsArr);

hatsArr.splice(3,0,'Fedora');
// console.log(hatsArr);

hatsArr.splice(1,2, 'Beanie', 'Cloche');
// console.log(hatsArr);

hatsArr.splice(2); // Removed all elements after 2
// console.log(hatsArr);

//? Array.reverse()
const prime = [2,3,5,7,9]

prime.reverse(); // reversed array order
// console.log(prime);

//const str = ['Code', 'Function', 'Web3'];
// console.log(str.indexOf('Function')); // Index of specfic elements : case sensative
// console.log(str.indexOf('Hello'))

//? Array.find(element, index, array)
//const numbers = [4,9,16,25,36]
//const first = numbers.find((value) => {return value > 18 });
// console.log(first);

function isPrime(el) {
  let start = 2;
  while( start <= Math.sqrt(el)) {
    if (el % start++ < 1) {
      return false;
    }
  }
  return el > 1;
}
// console.log([4,6,8,12,16,18].find(isPrime));
// console.log([4,6,8,11,13,17,18].find(isPrime));

//? Array.filter()
const str = ['Functional', 'Hello', 'Startup', 'Web']

const longWords = str.filter(word => word.length > 6); // New arr of word with a length is > 6 char.
// console.log(longWords);

//! JSON.stringify

//? Array.map()
// const number = [2,3,4,5]
//const sqr = number.map( x => x * x);
// console.log(sqr);

//? Array.slice()
const petsArr = ['cat', 'dog', 'bird', 'fish', 'rabbit'];
// console.log(petsArr);

const petsArr2 = petsArr.slice(2,4);
// console.log(petsArr2);

// console.log(petsArr.slice(1));
// console.log(petsArr.slice());

// Array.reduce()
const numbers = [1,2,3,4];
const reduceSum = numbers.reduce(function(accumlator, currentValue) {
  return accumlator + currentValue;
},0);

// console.log(reduceSum);

//? String.indexOf()
// console.log('One Two Three'.indexOf('ee')); // Idex of the begging
// console.log('One Two Three'.indexOf('d')); // -1; doens't exist

//? String.trim() : removes white space and str and end
// console.log('   Okay    \n    '.trim());
// console.log('   hello   dear    \n    '.trim());

//! Math
//? Math.round() - round to the nearest int
// console.log(Math.round(4.8653)); // 5
// console.log(Math.round(6.2653)); // 6
// console.log(Math.round(5.5)); // 6

//? Math.ceil() : next highest int
// console.log(Math.ceil(6.2653)); // 7

//? Math.floor() : next lowest 
// console.log(Math.floor(4.8653)); // 4
// console.log(Math.floor(5.5)); // 5

//? Math.max()
// console.log(Math.max(4,8,-2,16,9)); // 9

//? Math.min()
// console.log(Math.min(4,8,-2,16,9)); //-2

//? Math.random()
// console.log(Math.random()); // dec between 0 and 1
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random()*10) + 1); // 1 - 10
// console.log(Math.ceil(Math.random()*10)); // 1 - 10
// console.log(Math.floor(Math.random()*11) + 1); // 1 - 11

// console.log(Math.floor(Math.random() * (max - min + 1) + min));

//? Call Stack
function greet(who) {
  console.log(`Hello, ${who}!`);
}

greet('Harry');
console.log('Bye');

//Optioinal args
function square3(num) {
  return num * num;
}

// console.log(square3(5,68,true, 'Beth'));

function minus(a,b) {
  if (b === undefined) return -a;
  else return a - b;
}
// console.log(minus(10));
// console.log(minus(10,5));

function  roundto(num, step = 1) {
  let remainder = num % step;
  return num - remainder + (remainder < step / 2 ? 0 : step)
}

console.log(roundto(4,2));
console.log(roundto(5,2));
console.log(roundto(6,2));
console.log(roundto(4,3));

console.log(roundto(4));
console.log(roundto(5));
console.log(roundto(6));