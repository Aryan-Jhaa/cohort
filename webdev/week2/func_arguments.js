// Functional arguments, passing a function as an arguments to another function

function sum(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function doOperation(a, b, op){
    return op(a,b);
}

let a = 10;
let b = 5;

console.log(doOperation(a,b,sum)); // to sum
console.log(doOperation(a,b,subtract)); // to subtract
console.log(doOperation(a,b,multiply)); // to multiply
console.log(doOperation(a,b,divide)); // to divide


