// Palindrome number

const num1 = 121; //true
const num2 = -121; //false
const num3 = 10; //false
const num4 = 1234554321; //true
const num5 = 123456789; //false

function isPalindromeNumber(inputNumber){
    if (inputNumber < 0){
        return false;
    }
    if (inputNumber > -1 && inputNumber < 10){
        return true;
    }
    const num = inputNumber.toString();
    for (let i = 0; i < Math.ceil(num.length / 2); i++){
        if (num[i] !== num [num.length - i - 1]){
            return false;
        }
    }
    return true;
}

function isPalindromeNumber2(inputNumber){
    if (inputNumber < 0){
        return false;
    }
    if (inputNumber > -1 && inputNumber < 10){
        return true;
    }
    let reverse = 0;
    let num = inputNumber;
    
    while(inputNumber > reverse){
        reverse *= 10;
        reverse += inputNumber % 10;
        inputNumber = Math.trunc(inputNumber / 10);
    }
    
    return reverse === inputNumber || reverse === Math.trunc(inputNumber / 10);
}

//Test cases
console.log(num1, isPalindromeNumber(num1));
console.log(num2, isPalindromeNumber(num2));
console.log(num3, isPalindromeNumber(num3));
console.log(num4, isPalindromeNumber(num4));
console.log(num5, isPalindromeNumber(num5));
console.log("=====")
console.log(num1, isPalindromeNumber2(num1));
console.log(num2, isPalindromeNumber2(num2));
console.log(num3, isPalindromeNumber2(num3));
console.log(num4, isPalindromeNumber2(num4));
console.log(num5, isPalindromeNumber2(num5));
