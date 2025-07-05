// var let const to state variables
let firstName = "John";
const age = 30;
var isStudent = true;

console.log(firstName);
console.log(age);
console.log(isStudent);

let couple1 = ["john", "jane"]
console.log(couple1);

// Function

function greet(name) {
    return "Hello " + firstName;
}

console.log(greet(firstName));

function canVote(age) {
    if(age > 18)
        return true;
    
    return false;
}

console.log(canVote(22));
