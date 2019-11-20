//[Challenge] 1120 Callbacks, Async vs Sync & The Event Loop - Arguments :https://edstem.org/courses/3790/challenges/6691
// Use the following as a reference 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

const multipleArguments = (...args) => {
	if(args.length === 0){
		return 0;
	} else {
		return args.reduce((a,b) => a*b);
	}
}

console.log(multipleArguments(1, 2, 3, 4, 5, 6, 7))//should return 5040
console.log(multipleArguments( ))//should return 0
