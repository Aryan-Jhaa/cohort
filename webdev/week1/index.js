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

// loop to traverse an array

let arrayNames = ["John", "Brad", "Arnold", "Raj"];
let totalNames = arrayNames.length;

for(var i = 0; i<totalNames; i++){
    console.log(arrayNames[i]);
}

// Objects

let user1 = {
    name: "John",
    age: 30,
    gender: "male"
}

console.log(user1.gender);

function greetMale(user1) {
    if (user1.gender="male") {
        console.log("Male user: " + user1.name);
    }
    else{
        console.log("There are no male users");
        
    }
}
greetMale(user1);
