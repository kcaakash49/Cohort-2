const express = require("express")


const app = express()

app.use(express.json())

app.post("/",function(req,res){
    const kidney = req.body.kidneys
    const kidneyLength = kidney.length 

    res.send("you have "+kidneyLength+" kidneys")
})

app.use(function(err,req,res,next){
    res.json({
        msg:"Something went down"
    })
})
app.listen(3000,()=>{
    console.log("Server running port 3000")
})