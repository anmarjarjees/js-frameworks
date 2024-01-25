// Working with promises - Part2 - Working with "fetch()":
/*
Simplify the code of AJAX API request from the previous example
by using the ES6 "Fetch API" with "fetch()" method

- The Fetch API provides an interface for fetching resources
  (including across the network). 
- It requires only one parameter which is the URL of the resource that you want to fetch
- fetch() => returns a Promise object
- Since fetch() method returns a "Promise", so you can use .then() and .catch() methods to handle it :-)

 A basic fetch request is really simple to set up. 
 Have a look at the following code:

    fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

    fetch() does not directly return the JSON response body 
    but instead returns a promise that resolves with a Response object.

Link: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

// JSON Review

// Basic example of JSON:
const jsonExample = {
    "day": "Wed",
    "temperature": 36,
    "unit": "F",
    "status": "Cloudy"
}

// Basic example of JSON Array:
const JsonArray = [
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


// Online JSON Validator: https://jsonlint.com/

const url = "https://anmarjarjees.github.io/json-examples/music-inst.json";
// for testing:
let res = fetch(url);
console.log(res); // Promise { <pending> } <=> the output with node

fetch("http//api.non-exists-website-demo.org/no-jason-file.json")
    .then(response => {
        // handle the response
        console.log(response);
    })
    .catch(error => {
        // handle the error
        /*
        Beside the JS errors, you will see this error message
        */
        console.log("The error that we have is: " + error);
        // The error that we have is: TypeError: Failed to fetch
    });

// taking the response object that is being returned from fetch()
// Notice that "response" is just a naming convention
fetch(url).then((response) => console.log(response));

/*
 The response object that's returned by fetch()
 has a method name json()
 this "json()" method parses the body as JSON

 As you see the result above there is a "body" property
 that contains the data
 */

// repeat the same syntax but with .json() method:
// Chaining method:
// .then() = pass the value to the second .then()
// response.json() will be passed to the second .then()
fetch(url)
    // Don't forget that () are optional
    .then((response) => response.json())
    .then((data) => console.log(data));

// print the name of the first instrument "Piano"
/*
    index 0 => property "name" => the value "Piano"
*/
fetch(url)
    // since () are optional, so we can ignore them :-)
    .then(response => response.json())
    .then(data => console.log(data[0].name)); // Piano

/*

*/
fetch(url)
    // notice that () are optional
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            console.log(element.name);
        });
    }); // Piano

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
     Don't forget the error of the API request limit to GitHub API within a short period of time
 */

const gitApiUrl = "https://api.github.com/repos/microsoft/vscode/commits";
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
    )); // any recent name (id) who made the changes
