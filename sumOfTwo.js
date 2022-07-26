// Sum of two Numbers

function sumOfTwo(numberArray, num){
    let result = [];
    if (numberArray.length > 1){
        for (let i = 0; i < numberArray.length; i++){
            for (let j = 0; j < numberArray.length; j++){
                if (numberArray[i] + numberArray[j] === num && i !== j){
                    result.push(numberArray[i]);
                    result.push(numberArray[j]);
                    return result;
                }
            }
        }
    }
    return "Incorrect input data or array didn't contain required numbers";
}

//Test case
console.log(sumOfTwo([2, 7, 11, 15], 9)); //[2, 7]
console.log(sumOfTwo([2, 8, 11, 15], 9)); //Incorrect input data or array didn't contain required numbers
console.log(sumOfTwo([2, 7], 9)); //[2, 7]

function sumOfTwoOptimized(numberArray, num){
    const numObject = {};
    
    for (let i = 0; i < numberArray.length; i++){
        numObject[numberArray[i]] = i;
    }
    
    for (let i = 0; i < numberArray.length; i++){
        const diff = num - numberArray[i];
        if (numObject[diff] && numObject[diff] !== i){
            return [numberArray[i], numberArray[numObject[diff]]];
        }
    }
    return "Incorrect input data or array didn't contain required numbers";
}

//Test case
console.log(sumOfTwoOptimized([2, 7, 11, 15], 9)); //[2, 7]
console.log(sumOfTwoOptimized([2, 8, 11, 15], 16)); //Incorrect input data or array didn't contain required numbers
