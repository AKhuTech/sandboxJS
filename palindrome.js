//Palindrome

function palindrome(str){
    const word = str.replace(/ /g, "").toLowerCase();
    const reverseWord = word
        .split("")
        .reverse()
        .join("");
    
    return (reverseWord === word);
}
    
console.log(palindrome("racecar"));
console.log(palindrome("table"));
console.log(palindrome("А роза упала на лапу Азора"));
