// first unique char
const input1 = "leetcode"; //0
const input2 = "loveleetcode"; //2
const input3 = "aabb"; //-1

function firstUniqueChar(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let resultArr = [];
    for (let char of alphabet){
        if (str.indexOf(char) === str.lastIndexOf(char) && str.indexOf(char) !== -1){
            resultArr.push(str.indexOf(char));
        }
    }
    //console.log(resultArr);
    if (resultArr.length){
        return Math.min(...resultArr);
    }
    return -1;
}

console.log(firstUniqueChar(input1));
console.log(firstUniqueChar(input2));
console.log(firstUniqueChar(input3));
