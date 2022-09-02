// My short testing library

function test(value = 0){
    //console.log(value);
    return {
        expected: function (expectedValue){
            //console.log(expectedValue);
            if (value === expectedValue){
                return true;
            }
            return false;
        },
        equalTo: function (expectedValue){
            //console.log(expectedValue);
            if (value == expectedValue){
                return true;
            }
            return false;
        }
    }
}

//
console.log("2*2=4", test(2*2).expected(4));
console.log("=====");
console.log("2*2='4'", test(2*2).equalTo("4"));
console.log("=====");
console.log("2*2=5", test(2*2).expected(5));
