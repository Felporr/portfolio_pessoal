import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cabecario from './Componentes/Lista/Cabecario.jsx'
import Rodape from './Componentes/Lista/Rodape.jsx'
import Lista from './Componentes/Lista/Lista.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecario/>
    <Lista/>
    <Rodape/>
  </React.StrictMode>,
)
