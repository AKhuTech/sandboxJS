//Is number prime?

function isPrime(num){
    for (let i = 2, max = Math.sqrt(num); i < max; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true
}

//Get all prime numbers less than num or equal to num
function getPrimes(num){
    let result = [];
    for (let i = 2; i < num; i++){
        isPrime(i) ? result.push(i) : null;
    }
    return result;
}

console.log(getPrimes(100));
