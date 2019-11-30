// Canvas: https://coderacademy.instructure.com/courses/239/pages/ajax-cors-promises-and-fetch-api?module_item_id=9449
// Videos: JavaScript 20 & 21


// Challenge 1:
    // New function called subtractor
    // return a promise
    // takes any number of arguments and subtracts them all
    // resolves with the answer if is anything other than NaN
    // rejects if NaN


function subtractor(...args){
    return new Promise((resolve, reject) => {
       let answer = args.reduce((a,b) => a - b);

       if(isNaN(answer)){
           return reject(new Error("Input needs to be numbers"));
       }

       return resolve(answer);
    })
}


// Challenge 2:
    // subtractor(100, 10) -> answer1
    // substractor(answer1, 10) -> answer2
    // substractor(answer1, answer2, 10) -> answer3
    // console.log(answer)

    subtractor(100, 10)
    .then((answer1) => {

        subtractor(answer1, 10)
        .then((answer2) => {

            subtractor(answer1, answer2, 10)
            .then((answer3) => {
                console.log(answer3);            
            })
        
        })
    })
    .catch((error)=> {
        console.log(error);
    })
