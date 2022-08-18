//Search element in sorted array O(log n)
//Input - sorted array
//Output - index of element in array or -1 if element not found

const sortedArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5];

function findElementInSortedArray(array, target){
    if (!array.length || !Array.isArray(array)){
        return -1;
    }
    let left = 0;
    let right = array.length - 1;
    let mid;
    
    while(left <= right){
        mid = Math.ceil((left + right) / 2);
        if (target === array[mid]){
            return mid;
        }
        if (target < array[mid]){
            right = mid - 1;
        }
        if (target > array[mid]){
            left = mid + 1;
        }
    }
    return -1;
}

//Test 
console.log(findElementInSortedArray([], -3)); //-1
console.log(findElementInSortedArray("123", -3)); //-1
console.log(findElementInSortedArray(123, -3)); //-1
console.log(findElementInSortedArray(true, -3)); //-1
console.log(findElementInSortedArray(sortedArray, -3)); //0
console.log(findElementInSortedArray(sortedArray, 3)); //6
console.log(findElementInSortedArray(sortedArray, 5)); //8
console.log(findElementInSortedArray(sortedArray, 6)); //-1
