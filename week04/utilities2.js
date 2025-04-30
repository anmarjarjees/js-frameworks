/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/5.modules
*/

// utilities1 => contains list of functions
// to be used/called by main1.js:

// list of functions:
// these functions need to be exported:
// import => export
// using export => import => ES Module

// Using "export" with classical function pattern:
export function findAvg(x, y) {
  return (x + y) / 2;
}

// Using "export" with arrow function pattern:
export const verifyEvenOdd = (number) => {
  if (number % 2 == 0) return "Even";
  else return "Odd";
}

export function checkEvenOdd(number) {
  // Function to check if a number is even or odd
  if (number % 2 === 0) return "Even"; // Checks divisibility by 2
  else return "Odd"; // Returns "Odd" if not even
}

// testing:
//   console.log(checkEvenOdd(7));

export function getFactorial(number) {
  // Function to calculate the factorial of a number
  let factorial = 1; // Initialize factorial result
  for (let i = number; i > 0; i--) {
    factorial *= i; // Multiply current number
  }
  return factorial; // Return the factorial result
}

// testing:
//   console.log(getFactorial(5));

export const school = "ABC Advanced Learning";
export const program = "Advanced Web Programming";
export const year = 2022;
