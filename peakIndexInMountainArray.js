// Search of Mountain Peak

let arr1 = [1, 2, 3, 4, 3, 2, 1];
let arr2 = [11, 13, 14, 15, 6, 4, 2];
let arr3 = [10, 9, 8, 7, 6];

function peakIndexInMountainArray(arr){
    if (!arr.length){
        return null;
    }
    for (let i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]){
            return (arr[i - 1]);
        }
    }
    return null;
}

function peakIndexInMountainArray2(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while (start  < end){
        let middle = Math.floor((start+end) / 2);
        if (arr[middle] < arr[middle + 1]){
            start = middle + 1;
        }
        if (arr[middle] > arr[middle + 1]){
            end = middle;
        }
    }
    return arr[start];
}

//Test cases
console.log(peakIndexInMountainArray(arr1));
console.log(peakIndexInMountainArray(arr2));
console.log(peakIndexInMountainArray(arr3));

console.log(peakIndexInMountainArray2(arr1));
console.log(peakIndexInMountainArray2(arr2));
console.log(peakIndexInMountainArray2(arr3));
