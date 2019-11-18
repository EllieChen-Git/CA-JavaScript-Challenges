//[Challenge] 1114 Control Structures & Loops - Arvo Ch - Expert:https://coderacademy.instructure.com/courses/239/pages/control-structures-and-loops?module_item_id=9444

    // * Pick any four digit number and do the following:
    // Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
    // Take these two numbers and subtract the smaller number from the larger. 

    // Suppose we choose the number 8082.

    // 8820−0288=8532
    // 8532−2358=6174
    // 7641−1467=6174 

    // It hits 6174 and then stops.
    // Count also how many iterations loops are required to get to this point.

    // **Bonus points for recognising what 6174 is**
        // Refer to: https://en.wikipedia.org/wiki/6174_(number)
        // Refer to: https://brilliant.org/wiki/kaprekars-constant/

// Pseudocode:
    // 1. sort number into another 2 numbers (Num1 in ascending order & Num2 in descending order)
    // 2. subtract Num2 - Num1
    // 3. create a loop, if the answer is 6174 then stop
    // 4. count how many iterations to get to 6174

let expertChallenge = function(num){
    let count = 0;
    while (num !== 6174){ 
        let num1 = parseInt(num.toString().split("").sort().join(""));
        let num2 = parseInt(num.toString().split("").sort((a, b) => b-a).join(""));
        num = num2 - num1;
        count++;
    }
    return count; 
}

console.log(expertChallenge(8082)); //2
console.log(expertChallenge(7641)); //1
console.log(expertChallenge(8640)); //6 