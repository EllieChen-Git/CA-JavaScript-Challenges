//[Challenge] 1114 Control Structures & Loops - {Atomic Blonde}: https://edstem.org/courses/3790/challenges/6686

    // A number is an atomic blonde number if the sum and product of its digits are equal. Write a program to check if a number is an atomic blonde number or not. 
    // E.g. atomicBlonde(123), should return true (as 1 + 2 + 3 equals 6, as does 1 * 2 * 3)
    // E.g. atomicBlonde(23), should return false (as 2 + 3 equals 5, whereas  2 * 3 equals 6)

// Pseudocode:

// Solution:

const atomicBlonde = (num) => {
	let digits = num.toString().split('').map(Number);
	let sum = digits.reduce((a,b) => a+b);
	let product = digits.reduce((a,b) => a*b);
	return (sum === product)? true:false
}

console.log(atomicBlonde(123))
console.log(atomicBlonde(23))

// Methods:
    //.toString(): convert number to string, '123'
    //.split(''): convert string into array & separate each element with '', [ '1', '2', '3' ]
    //.map(Number): map each element into number, [ 1, 2, 3 ]
    //.reduce: executes a provided function for each value of the array (from left-to-right).
    //https://www.freecodecamp.org/news/reduce-f47a7da511a9/

    