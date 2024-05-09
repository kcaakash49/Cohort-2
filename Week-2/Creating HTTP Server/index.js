const express = require("express")
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000   //by default server will start at port 3000 but you can export PORT=3004 before running server and server will start at port 3004 this is environmental variable


// const port = 3000
const app = express();  //creates app object

app.use(bodyParser.json());

app.get('/',function(req,res){
    //request includes header,body,query parameters
    res.send("<h1>Hello World, I am Aakash KC and I am learning to code</h1>")
    
})
app.get('/routeexample',function(req,res){
    
    
    res.json({
        name:"Aakash",
        age:28
    })
})

app.post('/',function(req,res){
    //request includes header,body,query parameters
    console.log(req.headers['authorization'])
    console.log(req.body)
    res.send("<h1>I am a post request</h1>")
    
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})