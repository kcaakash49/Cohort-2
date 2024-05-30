import axios from "axios";
import { useEffect, useState } from "react"
import { Fetch } from "./component/Fetch";

function App() {
    const [id,setId] = useState(1)

    function handleClick(n){
      setId(n)
    }
  return <div>
    <button onClick={()=>handleClick(1)}>1</button>
    <button onClick={()=>handleClick(2)}>2</button>
    <button onClick={()=>handleClick(3)}>3</button>
    <button onClick={()=>handleClick(4)}>4</button>
    <Todo id={id}/>
  </div>
}

function Todo({id}){
  const [todo,setTodo] = useState({})
  useEffect(()=>{
    // const fetchData = async ()=>{
    //   const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    //   console.log(response.data.todo)
    //   setTodo(response.data.todo)
    // }
    // fetchData();
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        console.log(response.data.todo);
        setTodo(response.data.todo);
      })

  },[id])
  return <div>
    <div><h1>{todo.title}</h1></div>
    <div>{todo.description}</div>
  </div>
}


export default App
