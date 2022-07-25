//Is number prime?

function isPrime(num){
    for (let i = 2, max = Math.sqrt(num); i < max; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true
}


//Test cases
for (let i = 1; i < 101; i++){
    console.log(i, isPrime(i));
}
