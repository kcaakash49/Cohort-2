const express = require("express")
const zod = require("zod");


const app = express()

const schema = zod.array(zod.number());
//lets create schema for the below
// {
//     email: string => contail @ and .
//     password: atleast 8 letter 
//     country: "NP","US"
// }
const newSchema =zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("NP").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
})

app.use(express.json())

app.post("/",function(req,res){
    const kidney = req.body.kidneys
    console.log(kidney)
    const response = newSchema.safeParse(req.body)    
    if (!response.success){
        res.status(411).json({
            response
        })
        return;
    }
    res.send("You have " + kidney.length + " kidneys")
})


app.listen(3000,()=>{
    console.log("Server running port 3000")
})