import React, { useEffect, useState } from 'react'
import CreateTodo from './component/CreateTodo'

const Todo = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch("http://localhost:3000/todos");
                const json = await response.json();
                console.log("json",json.TodoList)
                setTodos(json.TodoList)
            }catch(err){
                console.log("error fetching data")
            }
        }
        setInterval(() => {
            fetchData();
        }, 5000);
        ;
    },[])

    
  return (
    <div>
        <CreateTodo/>
        
       {
        todos.map(item =>(
            <Todos title = {item.title} description = {item.description} key = {item._id}/>
        ))
       }
    </div>
  )
}

export default Todo;

function Todos({title,description}){
    return <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
    </div>
}
