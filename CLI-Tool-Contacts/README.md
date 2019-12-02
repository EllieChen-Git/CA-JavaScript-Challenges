[Challenge] 1128 NodeJS Intro - Arvo Ch - CLI Tool: https://coderacademyedu.github.io/resources/unit_cli_tool.html

##### Challenge
1.	Create a new project called `contacts`.
```
$ mkdir contacts
```
2.	Inside `contacts`, create an app.js file, set the contents to:
console.log('Hello World!')

```
$ cd contacts
$ touch app.js
```
app.js
```javascript
console.log("Hello World!");
```

3.	From your terminal, use Node.js to run app.js - you should see `Hello World` on the screen.
4.	In your project, initialize NPM.
```
$ npm init
```
5.	Install the Chalk package and colour your Hello World message.
```
$ npm install chalk
```
- Chalk doc: https://www.npmjs.com/package/chalk
- Remember to require it in app.js
```javascript
const chalk = require('chalk');

let greeting = chalk.cyan("Hello World!");
console.log(greeting);
```

6.	Install the Inquirer package. Ask the user for their name and then ask for their phone number.
```
$ npm install inquirer
```
- Inquirer doc: https://www.npmjs.com/package/inquirer

7.	Display the information back to the user on screen. Use the Chalk package to make it look cool.

```javascript
const inquier = require("inquirer");

inquier
    .prompt([{
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "input",
        name: "phoneNumber",
        message: "Whats your phone number?"
    }
    ])
    .then(answers => {
        let {name, phoneNumber} = answers;
        console.log(`Hi ${chalk.green(name)} and your number is ${chalk.yellow(phoneNumber)}`);
    })
```
---

##### Beast Mode
1.	We can automatically restart the server when the code changes. Install Nodemon globally and then use it to run your code
npm install -g nodemon
nodemon app.js

```
Ellie 02/12/2019
Somehow I couldn’t get 'nodemon app.js' to run.

Error message in terminal: "nodemon: command not found"
```

2.	Store the contact details in a hash.
3.	Use Inquirer to display a menu to the user. Allow the user to: add a contact, remove a contact or view all contacts.
4.	Instead of the app ending each time, take the user back to the menu.
5.	Add a quit option to the menu.
6.	Allow the user to view a specific contact. E.g. Take a name and return a number.
7.	Data is lost everytime you restart the app. Persists the data by reading/writing a file.

---
Beast Mode++
1.	Incorporate some more features/packages into your app. Ideas: geocoding, password protection, encryption.


