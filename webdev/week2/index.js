
const fs = require("fs");

// make sure youre in the same directory as the file you have to read.

const contents = fs.readFileSync("a.txt", "utf-8"); // (file name. encoding)
console.log(contents);
