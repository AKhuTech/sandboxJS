// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//sum of Three

const array = [-1, 0, 1, 2, -1, -4];

function sumOfThree(nums, target = 0){
    let result = [];
    
    if (nums.length < 3){
        return result;
    }
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            for (let k = 2; k < nums.length; k++){
                if (nums[i] + nums[j] + nums[k] === target 
                    && i !== j 
                    && j !== k 
                    && i !== k
                    ){
                    result.push([nums[i], nums[j], nums[k]]);                    
                }
            }
        }
    }
    
    if (result.length > 1){
        for (let i = 0; i < result.length; i++){
            result[i].sort((a, b) => a - b);
            result[i] = JSON.stringify(result[i]);
        }
    
        return [...new Set(result)].map(item => {
            return JSON.parse(item);
        });
    }
    return result;
}

//test case
console.log(sumOfThree(array, target = 0));

function sumOfThreeOptimized(nums, target = 0){
    let result = [];
    
    if (nums.length < 3){
        return result;
    }
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > target){
            break;
        }
        
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        
        let j = i + 1;
        
        let k = nums.length - 1;
        
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum === target){
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                continue;
            }
            if (sum < target){
                j++;
                continue;
            }
            if (sum > target){
                k--;
                continue;
            }
        }
    }
    
    return result;
}

//test case
console.log(sumOfThreeOptimized(array, target = 0));
