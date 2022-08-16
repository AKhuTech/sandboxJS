// Find number in sorted offset array

const array = [4, 5, 6, 7, 0, 1, 2];

function findInSortedOffsetArray(arr, element){
    if(arr.length <= 1){
        return -1;
    }
    
    let min = 0;
    let max= arr.length - 1;
    
    while(min <= max){
        let current = Math.floor((min + max) / 2);
        
        if (arr[current] === element){
            return current;
        }
        
        if (arr[min] < arr[current]){
            if (arr[min] <= element && element <= arr[current]){
                max = current - 1;
            } else {
                min = current + 1;
            }
        } else {
            if (arr[current] <= element && element <= arr[max]){
                min = current + 1;
            } else {
                max = current - 1;
            }
        }
    }
    
    return -1;
}

console.log(findInSortedOffsetArray(array, 0));
console.log(findInSortedOffsetArray(array, 3));
