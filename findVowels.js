//findVowels

function findVowels(word){
  let result = 0;
  const vowels = "aeiou";
  const wordLowerCaseArray = word.toLowerCase().split("");

  for (let i = 0; i < wordLowerCaseArray.length; i++){
    const found = vowels.indexOf(wordLowerCaseArray[i]);
    
    if (found >= 0){
      result++;
    }
  }

  return result;
}

console.log(findVowels("hello"));
console.log(findVowels("why"));

/*

function findVowels2(word){
  let result = word.match(/[aeiou]/gi);
  return result ? result.length : 0;
}

*/
