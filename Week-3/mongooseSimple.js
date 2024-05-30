const express = require("express")
const mongoose = require('mongoose');
const app = express()
mongoose.connect('mongodb+srv://kcaakash4910:A%40kash123@cluster0.kdchhm1.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email:String, password: String });

// const user = new User({ name: 'kcaakash4910', email: 'qpmzj@example.com',password: 'A@kash123' });

// user.save();
app.use(express.json())
app.post('/signup',async (req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  
  const existingUser = await User.findOne({name:name})
  
  if(existingUser){
    return res.status(400).send('User already exists');
  }
  
  const user = new User({name:name,email:email,password:password});
  
  user.save();
  
  res.json({
    "msg":"User Created Successfully"
  })
})

app.listen(3000,()=>{
    console.log("Server Started")
})