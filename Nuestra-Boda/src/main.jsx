import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Portada from './portada'
import Intinerario from './intinerario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <div >
      <Portada/>
      <Intinerario/>
    </div>
  </main>
)