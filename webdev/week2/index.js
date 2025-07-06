
const fs = require("fs");

// make sure youre in the same directory as the file you have to read.

const content1 = fs.readFileSync("a.txt", "utf-8"); // (file name. encoding)
const content2 = fs.readFileSync("b.txt", "utf-8"); // (file name. encoding)
console.log(content1);
console.log(content2);
