import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

const App = () => {
  return (
    <div>
      <h1>
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a la tienda"/>
      
      </h1></div>
  )
}

export default App