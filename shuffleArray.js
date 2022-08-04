// Shuffle Array

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleArray(arr){
    
    let shuffle = [];
    
    for (let i = 0; i < arr.length; i++){
        shuffle[i] = [arr[i], Math.random()];
    }
    
    //Sort by random value
    shuffle.sort((a, b) => a[1] - b[1]);
    //Make array of sorted items from input Array
    shuffle.forEach((item, index) => shuffle[index] = item[0]);
    
    return shuffle;
}

function shuffleArray2(arr){
     for (let i = arr.length -1; i > 0; i--){
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}

//Test cases
for (let i = 0; i < 10; i++){
    console.log(shuffleArray(input));
}
console.log("===");
for (let i = 0; i < 10; i++){
    console.log(shuffleArray2(input));
}
