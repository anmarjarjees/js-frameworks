/* 
Working with promises - Part2 - "fetch()":
******************************************
*/

/*
We used to use XMLHttpRequest(); => with JSON

Simplify the code of AJAX API request from the previous way
by using the ES6 "Fetch API" with "fetch()" method

- The Fetch API provides an interface for fetching resources
  (including across the network). 
- It requires only one parameter, which is the URL of the resource that you want to fetch.
- fetch() => returns a Promise object.
- Since fetch() method returns a "Promise", you can use .then() and .catch() methods to handle it :-)

// Basic fetch request example:
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch() does not directly return the JSON response body 
// but instead returns a promise that resolves with a Response object.

Link: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

// JSON Review

// Basic example of JSON:
const jsonExample = {
    "day": "Wed",
    "temperature": 36,
    "unit": "F",
    "status": "Cloudy"
};

// Basic example of a JSON Array:
const jsonArray = [
    {
        "id": 123,
        "actor": "Tom Hanks",
        "movies": 38
    },
    {
        "id": 783,
        "actor": "James Dean",
        "movies": 25
    },
    {
        "id": 223,
        "actor": "Tom Crouse",
        "movies": 48
    }
];

/*  
Online JSON Validator: https://jsonlint.com/
VS Code can also highlight errors in a JSON file :-)
*/

// URL for testing:
const url = "https://anmarjarjees.github.io/json-examples/music-inst.json";

// Fetching the URL and logging the Promise object
let res = fetch(url);
// for testing:
console.log(res);
/* 
Output:
*******
Promise {<pending>}
    [[Prototype]]: Promise
        catch: ƒ catch()
        constructor: ƒ Promise()
        finally: ƒ finally()
        then: ƒ then()
        Symbol(Symbol.toStringTag): "Promise"
        [[Prototype]]: Object
        [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Response
*/

// Fetching and logging the response object
// Code Template: fetch(url).then((response) => console.log(response));

// Fetching a non-existent URL to demonstrate error handling
fetch("http://api.non-exists-website-demo.org/no-json-file.json")
    .then(response => {
        // Handle the response
        console.log(response);
    })
    .catch(error => {
        // Handle the error
        /*
        Beside the JS errors, you will see this error message:
        */
        console.log("The error that we have is: " + error);
        // The error that we have is: TypeError: Failed to fetch
    });

// Fetching and logging the response object
fetch(url).then((response) => console.log(response));

/*
Using .json() method:
*********************
The response object that's returned by fetch()
> has a method named json()
> The "json()" method parses the body as JSON

As you see the result above, there is a "body" property
that contains the data.
*/

fetch(url)
    .then((response) => {
        // Parse the response body as JSON
        const data = response.json();
        console.log(data);
    })

// Using chaining with .json() method:
fetch(url)
    // The parentheses are optional
    .then((response) => response.json())
    .then((data) => console.log(data));

/* 
Output: data is an array of JSON objects
(3) [{…}, {…}, {…}]
0: {name: 'Piano', history: 'very old', specs: {…}}
1: {name: 'Guitar', history: 'old', specs: {…}}
2: {name: 'Ukulele', history: 'new', specs: {…}}
length: 3
[[Prototype]]: Array(0)
*/

/* 
IMPORTANT NOTES:
****************
NOTE#1:
 > This "arrow function" is without block body { ... }:
   (response) => response.json()
 > It implicitly returns the result of response.json()

NOTE#2:
 > This "arrow function" uses a block body { ... }:
   (response) => { response.json() } 
 > In a block body, if we do not explicitly use the return statement, 
   the function returns "undefined" by default.
*/

// Example 1: code below shows "undefined": no return with function body:
fetch(url)
    // Implicit Return:
    .then((response) => { response.json() })
    .then((data) => console.log(data));

// Example 2: code below shows the JSON array: using return with function body:
fetch(url)
    // Explicit Return
    .then((response) => { return response.json() })
    .then((data) => console.log(data));

// Task: Print the name of the first instrument "Piano"
/*
    Index 0 => property "name" => the value "Piano"
*/
fetch(url)
    // Parentheses are optional
    .then(response => response.json())
    .then(data => console.log(data[0].name)); // Piano

/*

*/
fetch(url)
    // Parentheses are optional
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            console.log(element.name); // Piano Guitar Ukulele
        });
    });

// Final example with our musical instruments JSON file :-)
// printing on the HTML document (page) with HTML elements for formatting:
fetch(url)
    // Parentheses are optional
    .then((response) => response.json())
    .then((data) => {
        let ul = "<ul>";
        data.forEach(element => {
            ul += "<li>" + element.name + "</li>";
            console.log(element.name);
        });
        ul += "</ul>";
        // document.write(ul);
        document.getElementById("instruments").innerHTML = ul;

    });

/*
     Let's try GitHub API to grab some info from commits: (commit -m "message")

     The pattern (syntax) to follow: 
     https://api.github.com/repos/YOUR_GITHUB_ID/YOUR_REPO_NAME/commits

     Example:
     https://api.github.com/repos/alexchow/my-java-repo/commits

     Let's try to grab the commits of "Microsoft" for "vscode" repo
     URL: https://github.com/microsoft/vscode
     API URL: https://api.github.com/repos/microsoft/vscode/commits

     IMPORTANT NOTE: 
     Don't forget the error of the API request about "CORS" policy:
     from origin 'null' has been blocked by CORS policy: 
     Cross-origin requests are only supported for protocol schemes: 
     http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

     CORS: is a security feature implemented by browsers to prevent web pages 
     from making requests to a different domain than the one that served the web page. 
     This is to prevent malicious websites from accessing sensitive information from another site.

     Error Message: 
     Indicates that the request is being blocked 
     because it is not made over a supported protocol (http, https, etc.), and the origin is 'null'
     
     Solutions:
     **********
     1. Instead of running the file directly, you should serve it via a local server. 
        For example, using XAMPP with "localhost".
     
     2. Using ExpressJS with "cors" middleware to enable "CORS" (for later...):
     
        Code Example:
        app.use(cors());
     
     3. Using a proxy server to bypass CORS restrictions (Just for development, NOT for production). 
        "cors-anywhere" => free service
     
        Code Example:
        fetch('https://cors-anywhere.YourURL')
          .then((response) => response.json())
          .then((data) => console.log(data));
 */

const gitApiUrl = "https://api.github.com/repos/microsoft/vscode/commits";

// Fetching the GitHub API and logging the response
fetch(gitApiUrl)
    .then(response => response.json())
    .then(console.log); // shorthand for: console.log(response)

/*
    You can also reveal the response object in the console window 
    to know how to access all its properties and values as we are going to do below
*/
fetch(gitApiUrl)
    .then(response => response.json())
    .then(response => console.log(response[0].author.login
    )); // Any name (id) who made the recent changes
