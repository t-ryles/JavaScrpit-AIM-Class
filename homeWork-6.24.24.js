// JavaScript Class Jun 24, 2024 Homework

// Write a program, using what we have learned about String methods and Array methods,  that will do the following:
// Start with the following array: cardsArray = [‘king’, ‘queen’, ‘jack’, ‘ace’, ‘nine’, d‘three’, ‘three’]. Copy this string exactly like it is (no capital letters).
let cardsArray = ["king", "queen", "jack", "ace", "nine", "three", "two"];
console.log(cardsArray);

// Move the ace to the beginning of the array. Make sure you do not end up with an array within an array.
for (let i = 0; i < cardsArray.length; i++) {
  if(cardsArray[i] == "ace") {
    let removedCard = cardsArray.splice(i, 1)[0];
    cardsArray.unshift(removedCard);
    console.log(cardsArray);
    break;
  }
}
// Add the missing cards to the array so you have a full deck - ace, king, queen, jack, ten, nine, eight, seven, six, five, four, three, two.

cardsArray.push("ten", "nine", "eight", "seven", "six", "five", "four")
console.log(cardsArray);

// Once that is done, capitalize all the elements of the cardsArray.

for (let i = 0; i < cardsArray.length; i++) {
  cardsArray[i] = cardsArray[i].toUpperCase();
}
console.log(cardsArray);

// Write a program, using two methods, that will take an array of integers (positive, negative and zero), add all the positive integers together, ignoring the others, and return the sum.
function sumOfPostiveNum (arr){
  let positiveNums = arr.filter(num => num > 0);
  let sum = positiveNums.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

let array = [3, -1, 0, 7, -4, 5, -2];
console.log(sumOfPostiveNum(array));


// *** HINT ***  We did not discuss chaining methods in class, so read this article on how to chain Array methods together and do so for the exercise (but then also read this article to learn why it is not always a good idea to chain methods).

// Three people are going to play a game (variable names: you plus two of your classmates). Each of you is going to roll two dice. The person with the highest total goes first. Write a program that does the following:
// Declares three variables
let taj = 0;
let john = 0;
let kwa = 0;

// For each variable, get two random numbers and total them together
const rollDices = () => {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6);
  return rollOne + rollTwo
}

taj = rollDices();
john = rollDices();
kwa = rollDices();

// Return the variable that has the highest total
console.log(Math.max(taj, john, kwa))

// Write a program that that will do the following, using the Array methods not mentioned at the end of this part (they have not been discussed in class so that you can practice looking new things up):
// Start with the following array: programWords = ["web", "code", "function", "method", "http", "html", “function”, "java", "rust"];

const programWords = ["web", "code", "function", "method", "http", "html", "java", "rust"]
// Change index positions 2, 3, and 4 to say Python

// Searching backwards through the array, console.log the index position of the second entry of the word “function”

// Console.log whether the array contains the words ‘java’ and ‘css’

// You will need to look up the following Array methods: fill(), lastIndexOf(), and includes()