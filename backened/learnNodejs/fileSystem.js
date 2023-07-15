// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
const fs=require("fs")
// from filesystem first argument is file and secod is encryption and the third is callback function which takes two argument parameter error and the data 

// fs.readFile("index.js","utf8",(err,data)=>{
//     console.log(err,data)
// })
let a=fs.readFileSync("index.js")
console.log(a.toString())
console.log("done with the content")
// done with the cont
// intentianally when we want to perform the asynchrous function then we use readFileSynchronously

let wf=fs.writeFile("index.js","this is adde to the current file",()=>{
    console.log("file is writtian")
});
console.log("file is ")
// lets say intentionally i want to run the code sysnchronously means write fiel synchronously
let wfs=fs.writeFileSync("index.js","console.log(\"this is writtain with the help of writfilsync method\")",()=>{
    console.log("this is writtain with the help of writfilsync method")
})

console.log("everyting is finish jai raam ji ki")