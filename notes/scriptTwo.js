console.log("New Notes:");

const goToDinner = () => {

  const menu = [
    {
      dishName: "Beef Terderloin",
      price: 14.75
    },
    {
      dishName: "Ribeye",
      price: 17.50
    },
    {
      dishName: "BBQ Chicken",
      price: 13.25
    }
  ];
  let menuList = "";
  for (let i = 0; i < menu.length; i++) {
    menuList += (`${i+1}. is ${menu[i].dishName}: $${menu[i].price.toFixed(2)} \n`)
  }

  let dinnerChoice = prompt(`Please select your choice of meal:\n${menuList}`)

  // while(Number.isNaN(dinnerChoice) || dinnerChoice <= 0 || dinnerChoice > menu.length ) {
  //   console.log(`That is a invalid choice, try again.`);
  //   dinnerChoice = parseInt(prompt(`
  //     Please select your choice of meal:\n${menuList}`
  //   ));
  // }

  if (!Number.isNaN(dinnerChoice) && dinnerChoice > 0 && dinnerChoice <= menu.length) {
    console.log(`You have selected the ${menu[dinnerChoice - 1].dishName}.`);
  }

  const preTipTotal = parseFloat(menu[dinnerChoice - 1].price);
  console.log(`The pre-tip total is: $${preTipTotal.toFixed(2)}`);
  const tipPercentage = 0.095;

  const tipCost = (preTip, tipPercent) => {
    const tipResult = (preTip * tipPercent);
    console.log(`The tip comes to: $${(Math.round(tipResult * 100) / 100).toFixed(2)}`)
    return Math.round(tipResult * 100) / 100;
  }

  const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
  console.log(`You total bill is $${totalBill.toFixed(2)}`)

};
//goToDinner();

//! Notes: June 26, 2024
// Date object - return current date and time

//let myDate = new Date();
//let myDate = new Date("September 3, 2015");
//let myDate = new Date("1995-12-17T03:24:00");
//? Year, Month, Day , Hour, Minute, Millisecond
//let myDate = new Date(2024,11,24,10,33,30,42);
//let myDate = new Date().getMilliseconds();
//let myDate = new Date().getTime(); // Milliseconds since Jan 1, 1970
//let myDate = new Date().getFullYear(); // 2024
//let myDate = new Date().getMonth(); // 5, moneths are 0 index
let myDate = new Date();

const getSixtyDaysAhead = () => {

  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

  let dateString = prompt("Give me a month, day, year:");
  let firstDate = new Date(dateString);
  console.log(firstDate.getDate());
  let secondDate = firstDate.setDate(firstDate.getDate() + 60);
  alert(`60 days after the date you gave me is: ${secondDate}`)
}

//getSixtyDaysAhead();

//document.getElementById('date').innerHTML = myDate;
//console.log(myDate);
// new Date(year, month, day, hour, m)
// new Date(milliseconds)
// new Date(date String)

const [month, day , year] = [
  myDate.getMonth(),
  myDate.getDay(),
  myDate.getFullYear()
]

//? Call Stack
//Video about the call stack - Dev.to

// const addOne = (value) => value + 1;
// const doubleValue = (value) => addOne(value) * 2;
// const makeTotal = (a,b) => {
//   return doubleValue(a) + doubleValue(b);
// }

//console.log(makeTotal(10,20));

// function chicken() {
//   return egg();
// }

// function egg(){
//   return chicken();
// }

//console.log(chicken() + "came first")


//? Optional Arguments
function square(num) {
  return num * num;
}

console.log(square(2));
console.log(square(4, true, "Ford"));

function minus(a,b) {
  if (b == undefined) return -a;
  else return a - b;
}

console.log(minus(10));
console.log(minus(10,5));

//? Closuer
function returnPlusTwo(num) {
 let sum = num + 2;
 return () => sum;
}

let threePlusTwo = returnPlusTwo(3);
let fivePlusTwo = returnPlusTwo(5);

function multiplier(factor) {
  return number  => number * factor
}

let twice = multiplier(2);
console.log(twice(5));

const createSecret = (secrect) => {
  return{
  getSecret: () => secrect,
  setSecret: (newSecret) => {
      secret = newSecret
    }
  };
};

const mySecret = createSecret("My secret");
console.log(mySecret.getSecret());

const add = (a) => (b) => a + b;
const incerment = add(1);
console.log(incerment(2));


//? Destructuring 
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

//const {firstName, lastName, age} = person;
//console.log(`I am ${firstName} ${lastName} and I am ${age} years old.`);

//? Array without Destructuring
const colors = ["Red", "Green", "Blue"]

// const firstColor = colors[0], secondColor = colors[1], thridColor = colors[2]
// console.log(`RGB stand for ${firstColor}, ${secondColor}, ${thridColor}`);

const [firstColor, secondColor, thridColor] = colors
console.log(`${firstColor}, ${secondColor}, and ${thridColor} are my favorite colors`);

const inventory = [
  {fruit: "Apples", quantity: 2},
  {fruit: "Bananas", quantity: 0},
  {fruit: "Orange", quantity: 5},
]

const result = inventory.find(({fruit}) => fruit === "Orange");
console.log(result);

// Nested object
const user = {
  firstName: "Alice",
  age: 25,
  address: {
    city: "Albany",
    state: "New York"
  }
}

//const {firstName, age, address: { city, state}} = user;
//console.log(firstName, city, state);

// Nested Array
const nestedArray = [1, [2,3], 4];
const [a,[b,c],d] = nestedArray;
console.log(a,b,c,d);

const {firstName, age = 28, gender = "female"} = user;
console.log(`My name is ${firstName}, I am ${age} year old ${gender}.`);

// Reference to person object
const {firstName : givenName, lastName: familyName, age: yearsOld} = person
console.log(`I go by ${givenName} ${familyName}, I ave lived ${yearsOld} years so far.`);

//? Rest 
// rest peramter have to be the last specified

const doule = (x) => x * 2;
const sum = (x,y) => x + y;
const douleAndSum = (...numbers) => numbers
  .map(doule)
  .reduce(sum,0);

console.log(douleAndSum(1,2,3)); // 12
console.log(douleAndSum(1,2,3,4)); // 20
console.log(douleAndSum(1,2,3,4,5)); // 30

const colorsTwo = ["Red", "Green", "Blue", "Orange", "Yellow"]



//? Recursion
// function that calls its self until it meets a basecase

function itertiveFactorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result
}
//console.log(itertiveFactorial(5)); // 120

function recursiveFactorial(n) {
  if ( n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n-1);
}
console.log(recursiveFactorial(6)) // 720