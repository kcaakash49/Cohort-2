import React, { memo, useCallback, useState } from 'react'

const UseCallback = () => {
    const [count,setCount] = useState(0);
    //react doesnot understand the diff between function passed as props so the child gets re-render when we dont use callback
    //usecallback gives memoization for function and prevent unnecessary re-render.
    const onClickFunction = useCallback(()=>{
        console.log("Button Clicked")
    },[])

  return (
    <div>
      <button  onClick={()=>setCount(count+1)}>click me {count}</button>
      <br /> <br />
      <Child clickFunction = {onClickFunction}/>
    </div>
  )
}

const Child = memo(({clickFunction})=>{
    console.log("child Re-renders")
    return <div>
        <button onClick={clickFunction}>Button Clicked</button>
    </div>
})

export default UseCallback
