//Single Number

let input1 = [1, 2, 4, 1, 2];
let input2 = [1, 2, 1, 2];
let input3 = 34;

function singleNumber1(nums){
    
    if (!nums.length) 
        return null;
    
    for (let i = 0; i < (nums.length) / 2; i++){
        if (!(nums.lastIndexOf(nums[i]) > i))
            return nums[i];
    }
    return null;
};

function singleNumber2(nums){
    let unique = new Set();
    let uniqueSum = 0;
    let numSum = 0;
    
    for (let i = 0; i < nums.length; i++){
        const current = nums[i];
        
        if(!unique.has(current)){
            unique.add(current);
            uniqueSum += current;
        }
        
        numSum += current;
    }
    
    return uniqueSum * 2 - numSum;
};

console.log(singleNumber1(input1)); //4
console.log(singleNumber1(input2)); //null
console.log(singleNumber1(input3)); //null
console.log(singleNumber2(input1)); //4
