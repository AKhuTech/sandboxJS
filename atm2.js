//ATM Task
/*
1. Always deliver the lowest number of possible notes;
2. Its possible to get the amount requested with available notes;
3. The client balance is infinite;
4. Amount of notes is infinite;
5. Available notes 100, 50, 20, 10
*/

const limits = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6};

function iWantToGet(sum, limits){
    let result = {};
    const sumCache = sum;

    const notes = Object.keys(limits);
    notes.sort((a, b) => (b - a));
    
    //Case 1. Try to collect sum using big notes
    for(let i = 0; i < notes.length; i++){
         while ((sum - notes[i]) >= 0 ){
            !result[notes[i]] ? result[notes[i]] = 1 : result[notes[i]]++;
            sum -= notes[i];
       } 
    }

        console.log("sum", sum);

    if (sum === 0){
        return result;
    }
    
    //Case 2. Try to collect sum using big notes
    sum = sumCache;
    result = {};
    notes.sort((a, b) => (a - b));
    
    for(let i = 0; i < notes.length; i++){
         while ((sum - notes[i]) >= 0 ){
            !result[notes[i]] ? result[notes[i]] = 1 : result[notes[i]]++;
            sum -= notes[i];
       } 
    }
    
    if (sum === 0){
        return result;
    }
    
    //If cases 1 & 2 didn't work return null
    return null;
}

//Test cases
console.log(iWantToGet(230, limits));
console.log(iWantToGet(1000, limits));
console.log(iWantToGet(200, limits));
console.log(iWantToGet(150, limits));
console.log(iWantToGet(120, limits));
console.log(iWantToGet(275, limits));
