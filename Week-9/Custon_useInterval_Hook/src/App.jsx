import { useEffect, useState } from 'react'

import './App.css'
import { useDebounce } from './usedebounce';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue,500);

  useInterval(()=>{
    setCount(count => count + 1)
  },1000)

  return (
    <>
      Timer is {count}
      <div>Debounced value is {debouncedValue}</div>
      <input type="text" value = {inputValue} onChange={e => setInputValue(e.target.value)} placeholder='search...' />
      
    </>
  )
}

function useInterval(fn,timeout){
  useEffect(()=>{
    // setInterval(()=>{
    //   fn()
    // },timeout);
    const id = setInterval(fn,timeout);

    return ()=>{
      clearInterval(id)
    }

    
  },[fn,timeout])
}


export default App
