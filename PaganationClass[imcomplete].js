//[Challenge] MongoDB Atlas, Heroku with Express & AWS S3 with React - Paganation Class: https://coderacademy.instructure.com/courses/239/pages/mongodb-atlas-heroku-with-express-and-aws-s3-with-react?module_item_id=9472

// Paganation Class
// Create a class that will handle content pagination.
// The class should take 2 parameters:
// 1. items (default: []): An array of the contents to paginate
// 2. pageSize (default: 10): Number of items to show on each page

// You will have to implement the following methods:
// prevPage <- Turn to previous page. If already at first page, notify user
// nextPage <- Turn to next page. If already at last page, notify user
// firstPage <- Go to first page
// lastPage <- Go to last page
// goToPage <- Takes an integer as input and goes to that page. If page doesn't exist, stay on current page, and notify user that page doesn't exist
// getVisibleItems <- Display all items on current page (this will be an array of length pageSize)

// Note: these methods must be chainable -> p.nextPage().nextPage()

"use strict";

const items = "abcdefghijklmnopqrstuvwxyz".split("");
pageSize = 5;

const items1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Write your class here

const page = new Pagination(items, pageSize);

console.log(p.getVisibleItems());
// ["a", "b", "c", "d", "e"]

p.nextPage();
console.log(p.getVisibleItems());
// ["f", "g", "h", "i", "j"]

p.goToPage(7);
// "I'm sorry, page 7 does not exist"

p.lastPage();
p.nextPage();
// "You are already on the last page!"

p.previousPage();
console.log(p.getVisibleItems());
// ["u", "v", "w", "x", "y"]

const p1 = new Pagination(items1);

console.log(p1.getVisibleItems());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

p1.previousPage();
// "You are already on the first page!"

p1.firstPage();
p1.nextPage();
console.log(p1.getVisibleItems());
// [11, 12, 13, 14, 15]

p1.nextPage();
// "You are already on the last page!"

console.log(p1.getVisibleItems());
// [11, 12, 13, 14, 15]

// Pseudocode:

// Solution:

// Methods:
