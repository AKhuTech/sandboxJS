// Remove Duplicates from Sorted Array O(n)

const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates (nums){
    let buffer = nums[0];
    let result = [];
    
    result.push(buffer);
    
    if (!nums.length){
        return result;
    }
    
    for (let i = 1; i < nums.length; i++){
        if (buffer === nums[i]){
            continue;
        }
        buffer = nums[i];
        result.push(buffer);
    }
    
    return result;
}

console.log(removeDuplicates(arr1));
console.log(arr1);

console.log(removeDuplicates(arr2));
console.log(arr2);
