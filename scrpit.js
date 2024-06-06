let car = "Audi";
console.log(car);

var total = 0;
total = total + 2;
total += 3;
total ++;
console.log(total)

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
tempCheck(32)
tempCheck(40)
tempCheck(55)

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

checkCreditHealth2(6000, 8)
checkCreditHealth2(5000, 8)
checkCreditHealth2(6000, 6)