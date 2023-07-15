const { text } = require('express');
const http = require('node:http');
const port =process.env.port||3000
const server=http.createServer((req,res)=>{
    // let a=req
    console.log("requested usrl is"+req.url);
    // console.log(a.keys())
    res.statusCode=200; 
    res.setHeader("Content-type","text/html")
    res.end("<h1>this is the file of the createserver </h1>"+res.statusCode+res.getHeader) 
})


server.listen(port,()=>{
    console.log(`server start at ${port}`)
})


// console.log("hello")
// require()