import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import UseCallback from './UseCallback.jsx'
import CustomHook from './CustomHook.jsx'
import UseRef from './UseRef.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseRef />
  </React.StrictMode>,
)
