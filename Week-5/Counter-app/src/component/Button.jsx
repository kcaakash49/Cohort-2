import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={()=>props.setCount(props.count+1)}>Counter {props.count}</button>
    </div>
  )
}

export default Button
