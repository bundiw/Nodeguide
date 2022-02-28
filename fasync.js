const fs = require('fs')

console.log("Start");
const data =fs.readFileSync("./care.txt",'utf-8')
console.log("This is:  ",data);
console.log("End");