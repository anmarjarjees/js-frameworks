/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/5.modules
*/

// utilities1 => contains list of functions
// to be used/called by main1.js:

// list of functions:
// these functions need to be exported:
// require() => exports

// 5! = 5 * 4 * 3 * 2 * 1 
// 5! =  1 * 2 * 3 * 4 * 5
// Classical way of function:
// exporting function getFactorial(number)
exports.getFactorial = (number) => {
  // Function to calculate the factorial of a number
  let factorial = 1; // Initialize factorial result
  for (let i = number; i > 0; i--) {
    factorial *= i; // Multiply current number
  }
  return factorial; // Return the factorial result
}

// testing:
//   console.log(getFactorial(5));

// The Arrow functions:
// exporting checkEvenOdd = (number) => { }
exports.checkEvenOdd = (number) => {
  // Function to check if a number is even or odd
  if (number % 2 === 0) return "Even"; // Checks divisibility by 2
  else return "Odd"; // Returns "Odd" if not even
}

// testing:
// console.log(checkEvenOdd(7));

// Or in two steps:
// Step1: Creating the function:
const findTotal = (tempArray) => {
  let total = 0;
  for (let i = 0; i < tempArray.length; i++) {
    total += tempArray[i];
  }
  return total;
}

// Step1: Assigning the function to a variable to be exported:
exports.findTotal = findTotal;

// Exporting variables:
const provinceName = "Ontario";
exports.provinceName = provinceName;


