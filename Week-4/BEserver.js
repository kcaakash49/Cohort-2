const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

app.get("/todo",(req,res)=>{
    res.json([
        {
            title: "Exercise",
            description:"Go to Gym",
            id:1
        },
        {
            title: "Study",
            description:"Learn Fullstack",
            id:2
        },
    ])
})

app.listen(3000,()=>{
    console.log("Server Started")
})