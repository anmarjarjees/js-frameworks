/*
Declarations:
JavaScript has three kinds of variable declarations.

> var:
Declares a variable, optionally initializing it to a value.

> let (ES6):
Declares a block-scoped, local variable, optionally initializing it to a value.

> const (ES6):
Declares a block-scoped, read-only named constant.

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations
*/

/*
      var against the idea of encapsulation 
      "i" should be local available for this "for" loop only:
*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);


// using let to solve this issue
/*
    variable declared with let can be accessed only inside its block only:
*/
for (let index = 0; index < 10; index++) {
    console.log(index);
}

// console.log(index); // Error: Uncaught ReferenceError: j is not defined

function doForLoop() {
    for (var i = 0; i <= 10; i++) {
        console.log(i);

    }
    console.log(i); // works! // 11
    /*
    so i accessible inside the entire function in which it's defined
    which is not good
    */

    for (let j = 0; j <= 10; j++) {
        console.log(i);
    }
    // console.log(j); 
    /*
    in conclusion:
    > "var" has a function scope
    > "let" has a block scope
    */
} // end

doForLoop();


// Problem with using "var":
var age = 22;
var age = 23; // bad to declare more! one time only


let name = "alex";
name = "sam";

/*
   "const" for defining a constant
   the same rule as "let", but with only one difference
   the variable defined with const cannot be reassigned:
*/
const college = "ILAC";
//  college = "ABC"; // ERROR
// Error Uncaught TypeError: Assignment to constant variable.

/*
   Q) When to use let and const?
   A) We should always use "const" unless we need to reassign a variable
*/

// Js classical way
console.log("My college is " + college);

// ES6: String Template:
console.log(`my college is ${college}`);

// Arrays:
const newsChannels = ["cp24", "CTV news", "CityTV", "Fox29"];
const sportsChannels = ["TSN", "SNE", "SNW", "SNP"];

// ES6: spread:
// Task: create another new array named "allNews"
// contains the elements of "newsChannels" array
// plus adding these two values: "CNN" and "Global News"
let allNews = ["CNN", "Global News", ...newsChannels];
console.log(allNews);

// Another Example:
let rgb = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];

// red, green, blue, cyan, magenta, etc...
const mergeColors = [...rgb, ...cmyk];
console.log(mergeColors); // [ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black' ]

// take the first two channels and save them into variables:
// newsChannels = ["cp24", "CTV news", "CityTV", "Fox29"];
const channel1 = newsChannels[0];
const channel2 = newsChannels[1];

// getting the first 3 colors of mergeColors:
// and save them into 3 variables:
let color1 = mergeColors[0];
let color2 = mergeColors[1];
let color3 = mergeColors[2];

// ES6: Destructing Assignment:
let [c1, c2, c3] = mergeColors;
console.log(`
Color1: ${c1}
Color2: ${c2}
Color3: ${c3}`);

// JS classical loop:
for (let index = 0; index < mergeColors.length; index++) {
    const element = mergeColors[index];
    console.log(element);
}

// ES6: for of:
for (const color of mergeColors) {
    console.log(color);
}