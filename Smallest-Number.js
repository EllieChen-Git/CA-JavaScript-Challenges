//[Challenge] W7 JavaScript review - Smallest Number: https://edstem.org/courses/3790/lessons/997/slides/8391

// Loop over the array and return the smallest number in it. 

// Solution:
let smallestNumber = (arr) => {
	let sort = arr.sort(         	//Sort the array from largest num to smallest num
		(a,b) => {return b - a}
    );
    
	let filter = sort.filter(x => typeof x === "number") //remove any non-num elements
    
    let length = filter.length;
    
    if (length === 0){
		return null;   //Return null if empty array
	} else {
		let lastNum = filter[length - 1]; //Can't use negative index in JS
		return lastNum;
	}
};

console.log(smallestNumber([1, 2, "d", 3]))
module.exports = {smallestNumber};

    
    