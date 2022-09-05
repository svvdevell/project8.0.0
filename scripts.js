"use strict"

// 1 

// function sumArr() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//     if (arguments.length <= 2){
//         console.error("Error...");
//     }
//     else{
//         let arr = Array.from(arguments); 
//         // console.log(arr);
//         let res = arr.sort((a,b)=> a - b).slice(0,2);
//         console.log(res);
//         let sum = res[0] + res[1];
//         console.log(sum);
//     }
// }

// sumArr(1,223,53444,77,34,67,9);

// 2 
function createCalc(x) {
    let result = x;
    return {
        sum : function(y) {
            return result = result + y;
        },
        mult : function(y) {
            return result = result * y;
        },
        min : function(y) {
            return result = result - y;
        },
        div : function(y) {
            return result = result / y;
        },
    };
}

const calc = createCalc(10);
console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.min(40));
console.log(calc.div(10));