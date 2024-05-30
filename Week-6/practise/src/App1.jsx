import React, { useState } from 'react'
import CreateTodo from './component/CreateTodo'
import DisplayTodos from './component/DisplayTodos'
let counter = 4;
const App1 = () => {
    const [todos,setTodos] = useState([
        {   
            id:1,
            title:"Exercise",
            description:"Go to Gym"
        },
        {
            id:2,
            title:"Study",
            description:"Learn Fullstack"
        },
        {
            id:3,
            title:"Do something fun",
            description:"Play games,draw etc"
        }
    ])
    function updateTodo(){
        setTodos([...todos,{
            id:counter++,
            title:"Relax",
            description:"listen music"
        }])
    }
  return (
    <div>
        <div>
            <button onClick = {updateTodo}>Add Todo</button>
        </div>
      <CreateTodo/>
      <DisplayTodos todos ={todos}></DisplayTodos>
    </div>
  )
}

export default App1
