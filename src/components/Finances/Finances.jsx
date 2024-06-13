import React, { useState } from 'react'


export const Finances = () => {
  const [gasto, setGasto] = useState('')
  const [precio, setPrecio] = useState('')
  const [gastosList, setGastosList] = useState([])


  //creo las dos funciones que me van a capturar el contenido del input
  const handleGastoChange = (e) => {
    setGasto(e.target.value)
  }

  const handlePrecioChange = (e) => {
    setPrecio(e.target.value)
  }

  //creo la funcion que va a guardar mi contenido de las listas
  const handleAddGasto = () => {
    if (gasto && precio) {
      setGastosList([...gastosList, { gasto, precio }])
      setGasto('')
      setPrecio('')
    }
  }

  return (
    <div>
      <h1>Mis finanzas</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          value={gasto}
          onChange={handleGastoChange}
          type="text"
          placeholder='¿En qué gastaste?' 
        />
        <span>$ 
          <input 
            value={precio}
            onChange={handlePrecioChange}
            type="number"
            placeholder='¿Cuánto gastaste?' 
          />
        </span>
      </form>      
      <button className='btnAdd' onClick={handleAddGasto}>Agregar Gasto</button>
      <ul>

        {/* Aqui con ayuda del map retorno cada producto que quiera agregar a la lista */}
        {gastosList.map((item, index) => (
          <li key={index}>{item.gasto}: ${item.precio}</li>
        ))}
      </ul>
    </div>
  )
}
