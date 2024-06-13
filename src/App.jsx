import './App.css'

// Importamos los componentes que voy a utilizar en las rutas
import { Welcome } from './components/Welcome/Welcome'
import { Routes, Route } from 'react-router'
import { Finances } from './components/Finances/Finances'

function App() {
  
  return (
    <>
  {/* Hacemos uso de las rutas en este caso para home que seria welcome y finances que es la pagina siguiente */}
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/Finances' element={<Finances />}/>
    </Routes>
      
    </>
  )
}

export default App
