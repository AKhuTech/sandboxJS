//Anagram

function anagram(word1, word2){
    const word1LowerCase = word1.toLowerCase().split("");
    const word2LowerCase = word2.toLowerCase().split("");
    
    const word1LettersSorted = word1LowerCase.sort();
    const word2LettersSorted = word2LowerCase.sort();
    
    for(let i = 0; i < word1LettersSorted.length; i++){
        if (word1LettersSorted[i] !== word2LettersSorted[i]){
            return false;
        }
    }
    
    return true;
}

const anagram2 = (a, b) => [...a.toLowerCase().split("")].sort().toString() === [...b.toLowerCase().split("")].sort().toString();

console.log(anagram("friend", "Finder"));
console.log(anagram("hello", "bye"));

console.log(anagram2("friend", "Finder"));
console.log(anagram2("hello", "bye"));
