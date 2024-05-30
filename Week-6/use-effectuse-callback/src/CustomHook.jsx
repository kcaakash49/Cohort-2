import React, { useState } from 'react'
import { todoList } from './component/utils';

function useTodos(){
    return todoList
}

const CustomHook = () => {
    const todo = useTodos();
    console.log(todo)
  return (
    <div>
      {todo.map(item=>(
        <div key = {item.id}>
            <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default CustomHook
