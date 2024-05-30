const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123321";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "aakash@gmail.com",
    password: "123321",
    name: "Aakash KC",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];
app.use(express.json())
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let result = false;
  ALL_USERS.forEach(element=>{
    console.log(element.username,element.password)
    console.log(username, password)
    if(element.username === username && element.password === password){
      result = true;
      
    }
  })

  return result;
  
  
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  console.log(req.headers.authorization)
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log("decoded\n",decoded)
    const username = decoded.username;
    console.log("Username\n",username)
    // return a list of users other than this username
    const userList = ALL_USERS.filter(element=>element.username!=username)
    return res.status(200).json({
      userList
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)