// Write a function that, when passed a certain number of inches, will print in the console the equivalent number of centimeters.
// An inch is 2.54 centimeters.

function inchConverter(inches) {
  convertValue = (inches * 2.54)
  console.log(`${inches} inches is ${convertValue} centimeters`)
}

inchConverter(3); // 7.62 

// Write a function that determines if a passed in number is positive or negative and even or odd.

function numberDescription(num) {
  let posOrNeg = ''
  let evenOrOdd = ''

  if (num > 0 ) {
    posOrNeg = "Positive"
  } else {
    posOrNeg = "Negative"
  }

  if(num % 2 == 0) {
    evenOrOdd = "Even"
  } else{ 
    evenOrOdd = "Odd"
  }
  console.log(`${num} is ${posOrNeg} and ${evenOrOdd}`)
}

numberDescription(-7)

// Write a function that calculates the ticket price for a passed in age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 pay a ticket price of 15.

function ticketPricing(age){
  let ticketPrice = 0
  if (age < 12) {
    ticketPrice = 5;
  } else if ( age < 18) {
    ticketPrice = 10;
  } else if ( age < 60) {
    ticketPrice = 20;
  } else {
    ticketPrice = 15;
  }

  console.log(`Ticket price for the of ${age} is $${ticketPrice}.`)
}

ticketPricing(55)

// Write a function that determines and categorizes the body mass index (BMI) of an adult using pounds and inches. 
// The formula for BMI using these is weight/height * height * 703. The categories are: BMI below 18.5 is Underweight; BMI between 18.5 and 24.9 is Healthy Weight.
//BMI between 25.0 and 29.9 is Overweight. BMI of 30.0 and above is Obese.

function bmiCalculator(pounds, inches) {
  let bmi = pounds /(inches ** 2) * 703
  let formattedBmi = parseFloat(bmi).toFixed(2);
  let bmiCategory = ''
  
  if (formattedBmi < 18.5) {
    bmiCategory = 'Underweight'
  } else if (formattedBmi > 18.5 && formattedBmi < 24.9) {
    bmiCategory = 'Healty weight'
  } else if (formattedBmi > 25.0  && formattedBmi < 29.9) {
    bmiCategory = 'Overweight'
  } else {
    bmiCategory = 'Obese'
  }

  console.log(`With a height of ${inches} inches and a weight of ${pounds} pounds, a BMI of ${formattedBmi} falls in the category of ${bmiCategory}`);
}

bmiCalculator(200, 86)

// Write a function to sort 3 numbers from highest to lowest and print the sorted numbers to the console.

function highToLow(num1, num2, num3) {
  let high, mid, low
 if (num1 >= num2 && num1 >= num3) {
  high = num1;
  if (num2 >= num3) {
    mid = num2;
    low = num3;
  } else {
    mid = num3;
    low = num2;
  }
 }  else if (num2 >= num1 && num2 >= num3) {
  high = num2;
  if (num1 >= num3) {
    mid = num1;
    low = num3;
  } else {
    mid = num3;
    low = num1;
  }
} else {
  high = num3;
  if (num1 >= num2) {
    mid = num1;
    low = num2;
  } else {
    mid = num2;
    low = num1;
  }
}
console.log(high, mid, low);
}

highToLow(34,12,32)

// Write a function that console.logs the sum of two arrays (the sum of all their elements). The arrays will only include integer numbers.

let listOne = [2,45,8,5,67];
let listTwo = [4,36,7,8,13];

function sumOfArrays(x, y) {
  let total = 0

  for( let i = 0; i < x.length; i++) {
    total += x[i]
  }

  for( let i = 0; i < y.length; i++) {
    total += y[i]
  }

  console.log(total)
}

sumOfArrays(listOne, listTwo)

// Write a function to check if a string passed into the function contains the letter ‘s’. Print yes to the console if it does and no if it does not.

function containsletter(str){
  let letter = 's';
  let count = 0;
  for ( let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count += 1;
    }
  }

  if ( count > 0 ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

containsletter('hape')


// Write a function that finds the summation of every number from 1 to a number passed into the function. 
// The number passed in will always be a positive number greater than 0.

function summation(num){
  if ( num == 0 || num == 1) {
    return 1;
  }
  return num + summation(num - 1);
}
console.log(summation(5));

function summation2(num){
  let sum = 0
  for (let i = num; i >= 1; i--) {
    sum += i
  }
  return sum
}
console.log(summation2(6));