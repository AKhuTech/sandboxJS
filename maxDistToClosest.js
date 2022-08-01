//Max Distance to the closest 

const row1 = [1, 0, 0, 0, 1, 0, 1];
const row2 = [1, 0, 0, 0];
const row3 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 1];

function maxDistToClosest(seatsArr){
    let result = [];
    let counter = 1;
    
    if (!seatsArr.length)
        return 0;
    
    for (let i = 0 ; i < seatsArr.length; i++){
        if (seatsArr[i] === 0){
            counter++;
        }
        if (seatsArr[i] || i === seatsArr.length - 1){
            if(!seatsArr[0] || (i === seatsArr.length - 1 && !seatsArr[i])){
                result.push(counter * 2);
                counter = 1;
                continue;
            }
            result.push(counter);
            counter = 1;
        }
    }
    
    return Math.ceil(
        Math.max.apply(null, result) / 2
    );
}

console.log(maxDistToClosest(row1));
console.log(maxDistToClosest(row2));
console.log(maxDistToClosest(row3));
