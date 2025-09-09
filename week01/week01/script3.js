// Async and Await Keywords:
async function DoSomething() {
    // major step => our application should wait this step before running the rest of code
    // Example: Fetch data from other recourse or reading a file, etc...
    await fetch();
}


async function getData1() {
    let response = await fetch("https://anmarjarjees.github.io/json-examples/music-inst.json");
    console.log(response); // response object
    let data = await response.json();
    console.log(data); // data => the array of JSON "instruments"
    // output: (3) [{…}, {…}, {…}] :-)
}


getData1()


async function getData2() {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}");
    console.log(response); // response object
    let data = await response.json();
    // display them in a nice format in the main document:
    let languages = ["Java", "C#", "Python", "PHP"];
    let ulLang = "<ul>";
    languages.forEach(element => {
        ulLang += "<li>" + element + "</li>";
    });
    ulLang += "</ul>";

    // document.getElementById("lang1").append(ulLang);
    /*
    <ul>
        <li>Java</li>
        <li>C#</li>
        <li>Python</li>
        <li>PHP</li>
    </ul>
    */
    document.getElementById("lang2").innerHTML = ulLang;
    // document.getElementById("lang2").innerText=ulLang;


    let ulElement = "<ul>";
    data.forEach(element => {
        // get the instrument name
        ulElement += "<li>" + element.name + "</li>";
    });
    ulElement += "</ul>";

    document.getElementById("instruments").innerHTML = ulElement;
}

getData2();