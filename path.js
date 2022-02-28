
// const os = require('os')
// console.log(os.freemem());  
// console.log(os.totalmem());  
const path = require('path')
console.log(path.sep);
const filepath = path.join('../','access','care.js')
console.log(filepath);
const name = path.basename(__filename)
console.log(name);