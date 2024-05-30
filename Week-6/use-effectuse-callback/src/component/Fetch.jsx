import { useEffect, useState } from "react"
import { todoList } from "./utils";

export function Fetch(){
    const [id,setId] = useState(0);
    function handleChange(e){
        console.log(e)
        setId(e.target.value)
    }
    const toDisplayTodo = todoList.filter(item=>item.id==id)
    return(
        <div>
            <input type="text" placeholder="Enter the todo id" onChange={handleChange}/>
            {
                toDisplayTodo.map(item=>(
                    <div key = {item.id}>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                ))
            }
        </div>
    )
}