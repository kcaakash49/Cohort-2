import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button count = {count} setCount = {setCount}/>
  )
}



export default App
