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

// Function expression


function getBalanceOfAccount(deposit, withdrawl){
  let balance = deposit - withdrawl;
  return balance;
}

let bal = getBalanceOfAccount(150, 100)
console.log(`Your balance is $${bal}.`);