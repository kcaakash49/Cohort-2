const express = require("express")
const cors = require("cors")

const { createTodoSchema, updateTodoSchema } = require("./types");
const { Todo } = require("./db");


const app = express();


app.use(express.json())
app.use(cors())



app.post("/addtodo",async (req,res)=>{
    const toCreate = req.body;
    const finalCreate = createTodoSchema.safeParse(toCreate);
    if(!finalCreate.success){
        res.json({
            msg:"Wrong inputs"
        })
        return;
    }
    //put it in mongoDB
    await Todo.create({
        title:req.body.title,
        description:req.body.description,
        completed:false
    })

    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async (req,res)=>{
    const todos = await Todo.find({});
    res.json({
        TodoList:todos
    })
})

app.put("/completed",async (req,res)=>{
    const toUpdate = req.body;
    const finalUpdate = updateTodoSchema.safeParse(toUpdate);
    if(!finalUpdate.success){
        res.json({
            msg:"wrong id"
        })
        return;
    }
    //update in mongoDB
    await Todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})
