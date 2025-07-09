function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;       // returns the object of a Promise class which is a pre defined class in JS
}

function callback() {
    console.log("3 secs have passed");
    
}

setTimeoutPromisified(3000).then(callback); // Promisified approach

setTimeout(callback, 3000); // callback approach





// *Understanding Promise*

function random(resolve) { // resolve is also a function
    setTimeout(resolve, 5000); // resolve is called in 5 secs and thats when callback will be called.
}

let p = new Promise(random); // eventually will return something


// after we eventually get the return value:

function callback1() {
    console.log("Promise completed after 5 secs");
    
}

p.then(callback1);
