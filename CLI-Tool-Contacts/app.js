const chalk = require("chalk");
const inquier = require("inquirer");
let greeting = chalk.cyan("Hello World!");

console.log(greeting);

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