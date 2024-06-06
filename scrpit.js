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

getTodaysClass('Monday');
getTodaysClass('Thursday')
getTodaysClass('Saturday')
getTodaysClass('Sunday')
getTodaysClass('Hot Girl')