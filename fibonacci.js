//Fibonacci
function fibonacci(num){
    let result = 1, 
        resultPrevious = 0;
        
    if (typeof num !== "number" || num < 0 || num !== Math.ceil(num)){
        throw new Error("Incorrect input number");
    }
    if (num === 0){
        return 0;
    }
    if (num === 1){
        return 1;
    }
    for (let i = 1; i < num; i++){
        const buffer = result; 
        result = result + resultPrevious;
        resultPrevious = buffer;
    }
    return result;
}

//Test
for(let i = 0; i < 11; i++){
    console.log(fibonacci(i));
}    
//console.log(fibonacci("ASDF"));
//console.log(fibonacci(-4));
//console.log(fibonacci(1.1));

function fibonacciShort(num){
    let a = 0,
        b = 1;
    
    if (num === 0){
        return 0;
    }
    
    for (let i = 1; i < num; i++){
        [a, b] = [b, a + b];
    }
    
    return b;
}

//Test
for(let i = 0; i < 11; i++){
    console.log(fibonacciShort(i));
}  
