# Week05 - Working with Express Part 1:
- index1.js => The Basic of Express App
- index2.js => Adding and loading JSON Data
- index3.js (Extra) => More Examples About URL Arguments

# The use of nodemon:
The required change for the "pacakge.json" file:
The original content:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
},
```
We can add new properties within the "scripts" object as shown below:

Add the keyword "start" by convention:
```
  "start": "nodemon --experimental-json-modules"
```

**NOTE: No need to add "--experimental-json-modules"**
----
With specifying the file name:
```
  "start": "nodemon file-name.js"
```
In the case of the above code => **npm start**
----

OR just adding nodemon, then specify the file name with npm command:
```
  "start": "nodemon"
```
In the case of the above code => **npm start file-name.js**

OR if you have multiple files running in development mode:
```
"dev1": "nodemon file1.js",
"dev2": "nodemon file2.js",
"dev3": "nodemon file3.js"
```
Then we can run the code using => **npm dev1, npm dev2, or npm dev3**


# Working with Express Part1
For full review about setup your workspace and installing the required packages please refer to my main Github repo ["Express-Basics"](https://github.com/anmarjarjees/express-basics).

Notice that "node-modules" folder was git ignored by me.