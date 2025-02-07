/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/5.modules
*/

// utilities1 => contains list of functions
// to be used/called by main1.js:

// list of functions:
// these functions need to be exported:
// require() => exports
exports.checkEvenOdd = (number) => {
  // Function to check if a number is even or odd
  if (number % 2 === 0) return "Even"; // Checks divisibility by 2
  else return "Odd"; // Returns "Odd" if not even
}

// testing:
//   console.log(checkEvenOdd(7));

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
