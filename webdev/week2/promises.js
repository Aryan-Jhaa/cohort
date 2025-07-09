function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;       // returns the object of a Promise class which is a pre defined class in JS
}

function callback() {
    console.log("3 seconds have passed");
    
}

setTimeoutPromisified(3000).then(callback); // Promisified approach

setTimeout(callback, 3000); // callback approach