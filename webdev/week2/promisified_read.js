const fs = require("fs");

function readTheFile(resolve){

    fs.readFile("a.txt", "utf-8", function(err, data){
        resolve(data);
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
    console.log(contents);
    
}
p.then(callback);