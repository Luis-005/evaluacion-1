import './App.css'

// Importamos los componentes que voy a utilizar en las rutas
import { Welcome } from './components/Welcome/Welcome'
import { Routes, Route } from 'react-router'
import { Finances } from './components/Finances/Finances'

function App() {
  
  return (
    <>
   
        <Finances />
      
    </>
  )
}

export default App
