//! Due July 1
//? Write a function that will multiply four numerical arguments together, with the following conditions:
// If the first argument is not present, its value should be 2
// If the second argument is not present, its value should be 3
// If the third argument is not present, its value should be the sum of the first argument and the second argument
// If the fourth argument is not present, its value should be the sum of the second argument and the third argument

function multiplyFourNum(a = 2, b = 3, c = (a + b), d = (b + c)){
  console.log(a * b * c * d); 
}

//?console.log the result of the multiplication
multiplyFourNum();

// You will call the function five times using the following arguments: 3, 5, 6, 4
// For the first call, use all four arguments
multiplyFourNum(3, 5, 6, 4);

// For the second call, use the first three arguments
multiplyFourNum(3, 5, 6);

// For the third call, use the first two arguments
multiplyFourNum(3, 5);

// For the fourth call, use the first argument alone
multiplyFourNum(3);

// For the fifth call, use the last three arguments
// Hint: you need to look up how you will make the first argument not present so that its value is 2
multiplyFourNum(undefined, 5, 6, 4);


//? Write a recursive function to compute the sum of an array of integers
let arr = [2,3,4,5]

function arrSum(ary, i = 0){
  if ( i == ary.length) {
    return 0;
  }
  return ary[i] + arrSum(ary, i + 1)
}
console.log(arrSum(arr));

// Using a closure, write a function called maxPlusMin that does the following:
// Takes an array of integers
// Finds the maximum and minimum values from the array  
// Adds the maximum and minimum values together
// Multiplies the sum of the maximum and minimum by a value to be provided from outside the function
// Test the function using the following information:

// const numbers = [5, 2, 6, 9, 7];
// console.log(maxPlusMinMultiplied(2));  // should be 22