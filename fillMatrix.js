//fill cols & rows "0" if array element is equal to 0

let input1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

let input2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 6],
    [7, 8, 9, 1],
];

function fillMatrix(array){
    if (!array.length || !array[0].length || typeof array === "string"){
        return null;
    }
    
    let rows = array.length;
    let cols = array[0].length;
    let isCol = false;
    
    for (let i = 0; i < rows; i++){
        if (array[i][0] === 0){
            isCol = true;
        }
        
        for(let j = 0; j < cols; j++){
            if (array[i][j] === 0){
                array[0][j] = 0;
                array[i][0] = 0;
            }
        }
    }
    
    for (let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if (array[i][0] === 0 || array[0][j] === 0){
                array[i][j] = 0;
            }
        }
    }
    
    if (array[0][0] === 0){
        for(let j = 0; j < cols; j++){
            array[0][j] = 0;
        }
    } 
    if (isCol){
        for(let i = 0; i < rows; i++){
            array[i][0] = 0;
        }
    } 
    
    return array;
    
}

console.log(fillMatrix("asdf"));
console.log(fillMatrix([1, 1]));
console.log(input1, fillMatrix(input1));
console.log(input2, fillMatrix(input2));
