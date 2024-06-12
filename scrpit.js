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
console.log(roundTwo(41,3));

//* Arrow functions tricks
const sum = (num1, num2) => num1 + num2;
const square = num => num * num;
const addTwoNumbers = () => 5 + 3;

//? Objects
