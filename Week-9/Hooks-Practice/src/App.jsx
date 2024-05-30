import { useEffect, useState } from 'react';

function App() {
  const [render, setRender] = useState(true);

  useEffect(()=>{
    // setTimeout(()=>{
    //   setRender(false)
    // },10000)

    setInterval(()=>{
      setRender(r=> !r)
    },5000)

  },[])

  return (
    <>
    {
      render ? <MyComponent/> : <div></div>
    }
     
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.error("Component mounted")

    //cleanup function
    return ()=>{
      console.log("component unmounted")
    }
  },[]);

  return <div>
    From inside my component
  </div>
}
export default App
