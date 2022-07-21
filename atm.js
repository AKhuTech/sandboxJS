//ATM Task
/*
1. Always deliver the lowest number of possible notes;
2. Its possible to get the amount requested with available notes;
3. The client balance is infinite;
4. Amount of notes is infinite;
5. Available notes 100, 50, 20, 10
*/

function iWantToGet(sum){
    let result = {};
    const hundreds = Math.floor(sum / 100, 0);
    result["100"] = hundreds;
    
    const fifties = Math.floor((sum - hundreds * 100) / 50);
    result["50"] = fifties;
    
    const twenties = Math.floor((sum - hundreds * 100 - fifties * 50) / 20);
    result["20"] = twenties;
    
    const tens = Math.floor((sum - hundreds * 100 - fifties * 50 - twenties * 20) / 10);
    result["10"] = tens;
    
    const check = hundreds * 100 + fifties * 50 + twenties * 20 + tens * 10;
    
    if (check !== sum){
        throw "Incorrect required sum";
    }
    
    return result;
}

console.log(iWantToGet(160)); // 100; 50; 10
//console.log(iWantToGet(165)); // 100; 50; 10

function iWantToGet2(sum){
    let result = {};
    const available = [100, 50, 20, 10];
    
    for (let i = 0; i < available.length; i++){
        const notes = Math.floor(sum / available[i]);
        result[available[i]] = notes;
        sum -= notes * available[i];
    }
    
    return result;
}

console.log(iWantToGet2(160)); // 100; 50; 10
