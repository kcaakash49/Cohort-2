import { useState,useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
    const [todos,setTodos] = useState([]);

    // fetch("http://localhost:3000/todos")
    // .then(function(response){
    //   console.log(response)
    //   response.json().then(function(data){
    //     console.log(data.TodoList)
    //     setTodos(data.TodoList)
    //   })
    // })

    useEffect(() => {
      const fetchTodos = async () => {
        try {
          const response = await fetch("http://localhost:3000/todos");
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          const data = await response.json();
          console.log(data.TodoList);
          setTodos(data.TodoList);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
  
      fetchTodos();
    }, [setTodos]);
  
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}/>
    </div>
  )
}

export default App
