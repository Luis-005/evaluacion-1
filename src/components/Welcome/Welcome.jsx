import React from 'react'
import './Welcome.css'
import { useState } from 'react'

//importamos el NavLink para hacer uso de las rutas
import { NavLink } from 'react-router-dom'

export const Welcome = () => {
  const[ficha, setFicha] = useState('2722493')
  
  return (
    
    <section className='blockWelcome'>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <NavLink className='into' to='/Finances'>Ingresar</NavLink>
    </section>
    
  )
}
