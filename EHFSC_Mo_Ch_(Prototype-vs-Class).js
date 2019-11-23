//[Challenge] 1118 Exception Handling, Function Scope & Closures - Morning Challenge: https://coderacademy.instructure.com/courses/239/pages/exception-handling-function-scope-and-closures?module_item_id=9447

//1. Rewrite code below using ES6 Classes

"use strict";

// function Food(calories) {
//     this.calories = calories;
// }
class Food {
    constructor(calories){
        this.calories = calories;
    }
}

// function Fruit(title, price, calories) {
//     Food.call(this, calories);
//     this.title = title;
//     this.price = price;
// };

// Fruit.prototype = Object.create(Food.prototype);

class Fruit extends Food {
    constructor(title, price, calories){
        super(calories);
        this.title = title;
        this.price = price; 
    }

    // Fruit.prototype.priceInfo = function() {
    //     return `Price of one ${this.title} is $${this.price}`;
    // };
    priceInfo() {
        return `Price of one ${this.title} is $${this.price}`;
    }

}

var apple = new Fruit("Apple", 2, 150);
// console.log(apple); 
// console.log(apple.priceInfo());

var orange = new Fruit("Orange", 3, 180);
// console.log(orange.priceInfo());


//****************************************************************//
//****************************************************************//


// 2. Rewrite this code without using ES6 Classes

// class Mammal {
//     constructor(name) {
//         this.hair = true;
//         this.warmblooded = true;
//     }

//     breath() {
//         console.log("I love H2O");
//     }

//     speak(input) {
//         return `I am a ${input}`;
//     }
// }

function Mammal(name) {
    this.name = name;
    this.hair = true;
    this.warmblooded = true;
}

Mammal.prototype.breath = function() {
    console.log("I love H2O");
};

Mammal.prototype.speak = function(input) {
    return `I am a ${input}`;
};

// class Lion extends Mammal {
//     constructor(name) {
//         super();
//         this.type = "Lion";
//         this.name = name;
//     }

//     roar() {
//         return super.speak(this.type) + "! Here me ROAR!";
//     }
// }


function Lion(name) {
    Mammal.call(this, name);  //https://devdocs.io/javascript/global_objects/function/call
    this.type = "Lion";
};

Lion.prototype = Object.create(Mammal.prototype);

Lion.prototype.roar = function() {
        return this.speak(this.type) + "! Here me ROAR!";
    };



let simba = new Lion("simba");
                          
console.log(simba);         //Mammal { name: 'simba', hair: true, warmblooded: true, type: 'Lion' }
                            //Lion { hair: true, warmblooded: true, type: 'Lion', name: 'simba' }
console.log(simba.roar());  //I am a Lion! Here me ROAR!
    