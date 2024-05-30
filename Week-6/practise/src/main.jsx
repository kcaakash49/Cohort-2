import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import CardWrapperChildren from './CardWrapperChildren.jsx'
import Todo from './Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>,
)
