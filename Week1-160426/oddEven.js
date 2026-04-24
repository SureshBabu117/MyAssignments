/*
function isOddOrEven(parm) {
    if (parm % 2 === 0) {
        return (parm + " is an Even number");
    } else {
        return (parm + " is an Odd number");
    }
}

console.log(isOddOrEven(986567989854511));
console.log(isOddOrEven(123564987974422));
*/

// The above code is correct but I have changed it to the below code to avoid using return 
// statement and directly print the result in the console.

function isOddOrEven(num) {
    let result;

    if (num % 2 === 0) {
        result = "Even";
    } 
    else {
        result = "Odd";
    }
    console.log(num + " is an " + result + " number");
}

isOddOrEven(986567989854511);
isOddOrEven(123564987974422);