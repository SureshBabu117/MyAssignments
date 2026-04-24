// 1. Create a function named isNumberType that takes a number as a parameter
function isNumberType(num) {
    // 2. Declare and initialize the variable
    let result;

    // 3. Use a conditional statement to check if the number is greater than 0, 
    // to check if the number is less than 0, and to handle the case when the number is zero
    if (num > 0) {
        result = "Positive";
    } else if (num < 0) {
        result = "Negative";
    } else {
        result = "Neutral";
    }

    //4. Return the corresponding string value for each case
    return result;
}

// 5. Call the function and print the result
let inp = -1234567890123456;
console.log("The number", inp, "is:", isNumberType(inp));

inp = +9876543210987654;
console.log("The number", inp, "is:", isNumberType(inp));

inp = -0;
console.log("The number", inp, "is:", isNumberType(inp));