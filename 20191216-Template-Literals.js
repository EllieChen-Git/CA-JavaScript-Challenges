//[Challenge] 1216 Express Cookies, Sessions & Authentication - Mo: https://coderacademy.instructure.com/courses/239/pages/express-cookies-sessions-and-authentication?module_item_id=9461

// Core:
    // Template Literals. Create carInfo() function that will return info about each car
    // A car is considered cheap if it's price is <= 20,000
    // A car is considered expensive if it's price is > 20,000

"use strict";

var cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000 },
    { brand: "Holden", price: 20000 }
];

// Write carInfo() function here

// My function
    function carInfo() {
        for (let i = 0; i < cars.length; i++){
            if(cars[i].price <= 20000) {
                console.log(`Price of my new ${cars[i].brand} is ${cars[i].price}, and it is a cheap car`)
            } else {
                console.log(`Price of my new ${cars[i].brand} is ${cars[i].price}, and it is an expensive car`)
            }
        }}
    carInfo();

// Solution
    function carInfo(i) {
        if(i.price<= 20000) {
            return (`Price of my new ${i.brand} is ${i.price}, and it is a cheap car`)
        } else {
            return (`Price of my new ${i.brand} is ${i.price}, and it is an expensive car`)
        }
    } 
    cars.forEach(car => console.log(carInfo(car)));

// Price of my new Honda is $13000, and it is a cheap car.
// Price of my new Rolls-Royce is $120000, and it is an expensive car.
// Price of my new Holden is $20000, and it is a cheap car.


// Advanced:
    // Check presence of the function parameters. Throw an Error when function square() is called without arguments.
    // To do this, create a new function, and use it as default parameter.

"use strict";

// My solution
    function square(a) {
        let answer = a * a;
        if (isNaN(answer)){
            throw new Error("Uncaught Error: Function square requires an argument!")
        }
        console.log(answer);
    }

// Mark's solution
function square(a = "err") {
    if (a === "err") {
        throw new Error("Uncaught Error: Function square requires an argument!")
    }
    console.log(a * a);
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires an argument!