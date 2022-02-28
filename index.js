//when using no acess to browser API(DOM)
//in node we user server console
//uses commonJS
//uses es6
//builtin modules
//os
//path
//fs
//http
//locking and ublocking
const d= require('fs')
const path = require('path')

// thiss metod is blocking
// const wfle = fs.writeFileSync(
//     path.join(__dirname,'g'),
//     "never give up"
// )
// console.log("Another Milestone" + wfle);
// const fData = fs.readFileSync('./care.txt','utf-8')
// console.log(fData)
const _ =require('lodash')
const items=[[15,466,[1,4]],13]
const newItems = _.flattenDeep(items)
console.log(JSON.stringify(newItems));

