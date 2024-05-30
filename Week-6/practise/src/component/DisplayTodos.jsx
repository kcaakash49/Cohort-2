import React, { useState } from 'react'

const DisplayTodos = ({todos}) => {
    
  return (
    <div>
      {
        todos.map((item,index)=>(
            <div key = {index}style={{margin:10}}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.description}</div>
            </div>
        ))
    }
    </div>
)
}

export default DisplayTodos
