import { useEffect, useState } from 'react'
import axios from 'axios'
//simple custom hook
function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const value = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })

    },n*1000)
    //clear function
    return () => {
      clearInterval(value)
    }
  },[n])

  return {todos,loading} ;

}

function App1() {
  const {todos,loading} = useTodos(4);

  return (
    <>
      {
        loading ? <div>loading......</div> : todos.map(todo => <Track todo={todo} key = {todo.id} />)
      }
      
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App1