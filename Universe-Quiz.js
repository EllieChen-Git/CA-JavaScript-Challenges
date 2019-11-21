// How to use this file
    // 1. place this file inside a folder
    // 2. cd to the folder and run the following commands
    // 3. $npm init
    // 4. npm install readline-sync



const readline = require('readline-sync');

class Question {
    constructor(content) {
        // console.log("******************");
        // debugging: see where it stops running
        if (content === undefined) {
            throw new Error("must set content when creating a question");
        }
        this.content = content;
        this.options = [];
        this.answer = null;
    }
    addOption(option) {
        // console.log(this);
        // debugging: see where it stops running
        if (this.options.length <= 25) {
            this.options.push(option);
        }
        return this; //use 'return this' in order to chain methods
    }
    setAnswer(optionsIndex) {
        if (this.options[optionsIndex] === undefined) {
            throw new Error("index does not exist");
        }
        this.answer = optionsIndex;
    }
    checkAnswer(answer) {
        if (typeof answer === "string") {  //typeof 'string' in string & lower case
            answer = answer.charCodeAt(0) - 97; //single char = index 0
        }
        return answer === this.answer;
    }
    printOptions() {
        for (let index in this.options) {
            console.log(String.fromCharCode(97 + parseInt(index)), ":", this.options[index]);
        }
    }
}
class Quiz {
    constructor(name) {
        if (typeof name === undefined) {
            throw new Error("quiz must be given a name");
        }
        this.name = name;
        this.questions = [];
        this.score = 0;
        this.incorrects = [];
    }
    addQuestion(question) {
        if (question instanceof Question) {
            this.questions.push(question);
        }
        return this;
    }
    printIncorrects() {
        for(let question of this.incorrects) {
            console.log(question.content);
        }
    }
    run() {
        console.log(`Welcome to the ${this.name} quiz`);
        let questionsLength = this.questions.length; //better efficiency
        for(let index = 0; index < questionsLength; index++) {
            let question = this.questions[index];
            console.log(`You are on question ${index + 1} of ${questionsLength}`);
            console.log(question.content);
            question.printOptions();;
              
            let answer = readline.question("Type your answer and hit enter \n");
            if (question.checkAnswer(answer)) {
                this.score++;
            } else {
                this.incorrects.push(question);
            } 
        }
        console.log(`You scored a ${this.score} out of ${questionsLength}`);
        if (this.incorrects.length > 0) {
            console.log("You got these questions wrong");
            this.printIncorrects();
        }
    }
}
let question1 = new Question("Why was the universe created?");
question1
    .addOption("42")
    .addOption("there was no reason")
    .addOption("because its cool");
question1.setAnswer(0); //set answer here
let question2 = new Question("How big is the universe?");
question2
    .addOption("3km")
    .addOption("infinitely large in size")
    .addOption("you don't wanna know")
    .addOption("other");
question2.setAnswer(1);
let question3 = new Question("How old is the universe?");
question3
    .addOption("no one knows")
    .addOption("13.8 billion years");
question3.setAnswer(1);
let universeQuiz = new Quiz("Ultimate Universe Quiz!");
universeQuiz
    .addQuestion(question1)
    .addQuestion(question2)
    .addQuestion(question3);
universeQuiz.run();