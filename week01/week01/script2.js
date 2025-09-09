/*
fetch()

basic template idea:
fetch(URL OF JSON Data)
.then( response-object ) => retrieve the JSON data!
.then ( data from the response-object )
.catch()
.finally() 

basic template syntax:
fetch('http://example.com/movies.json')
.then ( (response) => response.json() )
.then ( (data) => console.log(data))
*/

// URL for testing:
let url = "https://anmarjarjees.github.io/json-example/music-inst.json";

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))