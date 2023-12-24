import React from 'react'
import './ItemListConteiner.css'

const ItemListConteiner = ({greeting}) => {
  return (
    <h1 className='Itemlist'> {greeting} </h1>
  )
}

export default ItemListConteiner