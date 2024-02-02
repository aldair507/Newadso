import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Effect from './useFect/effect.jsx'
import Ejemplo2 from './useFect/ejemplo2.jsx'
import Contexto from './usecontext/contexto.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Effect />
    <Ejemplo2/>
    <Contexto/>
  </React.StrictMode>,
)
