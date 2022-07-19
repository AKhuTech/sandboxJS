//Currencies task

const input = [
    ["usd", "buy", 10000],
    ["usd", "sell", 5000],
    ["gbp", "buy", 9000],
    ["eur", "sell", 7000],
    ["amd", "buy", 100000],
    ["usd", "sell", 25000],
];

/* 
Should return:
{ usd: [ 10000, 30000 ],
  gbp: [ 9000, 0 ],
  eur: [ 0, 7000 ],
  amd: [ 100000, 0 ] }
*/

function currencies(inputArray){
    if (Array.isArray(inputArray) === false){
        return "Incorrect format of input data";
    }
    
    let result = {};
    
    //To do code better
    //let [currency, type, amount] = item;
    
    inputArray.forEach(item => {
        if(!result[item[0]]){
         result[item[0]] = [0, 0];   
        }
       if (item[1] === "buy"){
           result[item[0]][0] = result[item[0]][0] + item[2];
       }
       if (item[1] === "sell"){
           result[item[0]][1] = result[item[0]][1] + item[2];
       }
    });
    
    return result;
}

console.log(currencies(input));
