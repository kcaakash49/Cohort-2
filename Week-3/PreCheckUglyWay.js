//input validation and authentication check the ugly way

const express = require('express')

const app = express()

app.get('/checkup',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidney;
    console.log(typeof(kidneyId))
    
    if(username != "aakash" && password != "pass"){
        res.json({
            msg:"User Doesnot exist"
        });
        return;
    }
    
    if (kidneyId != 1 && kidneyId != 2) {
        console.log("kidneyId", kidneyId)
        res.json({
            msg: "Wrong Inputs"
        });
        return;
    }
    

    res.send("Your kidney is healthy")
})

app.listen(3000,()=>{
    console.log("Server starting at port 3000")
})