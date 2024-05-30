//api request can have multiple callbacks
const express = require("express")

const app = express();

function authMiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password

    if(username != "aakash" || password != "pass"){
        res.status(403).json({
            msg:"authentication failed"
        })
    }else{
        next();
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidney;

    if(kidneyId != 1 && kidneyId != 2 ){
        res.status(403).json({
            msg:"incorrect input"
        })
    }else{
        next();
    }
}

app.get("/kidneycheckup",authMiddleware,kidneyMiddleware,function(req,res){
    res.send("Everything is fine")
})

app.listen(3000,()=>{
  
    console.log("Server started at port 3000")
})