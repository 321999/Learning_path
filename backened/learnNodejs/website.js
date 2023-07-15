const http=require("http");
const fs=require("fs")
let server=http.createServer((req,res)=>{
    // res.end("<h1>welcome to new sever</h1>")
    // u cna set statuscode and then perform the action as well 
    if(req.url=="/"){
        res.end("<h1>welcome to ther homepage</h1>")
    }else if(req.url=="/about"){
        res.end("<h1>welcome to the about section</h1>")
    }else if(req.url=="/about/kishore"){
        res.end("<h1>bhi this is not good to come that much inside</h1>")
    }else if(req.url=="/about/kishore/myfile"){
        let f=fs.readFileSync("index.html")
        res.end(f.toString())
        // res.end("<h1>bhi this is not good to come that much inside</h1>")
    }else{
        // res.kshoe()//due to this app hi crashed ho gaya
        res.end("welcome bhilog kya haalchaal majama")
    }
    console.log(req.url)
    
})
server.listen(3000,()=>{
    console.log("server is starting at port number 3000")
})