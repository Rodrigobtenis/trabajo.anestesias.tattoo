import React from 'react'
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
  return (
   <header>
<h1>Anestesias Tattoo</h1>
<nav>

    <ul>

        <li>Piel cerrada</li>
        <li>Piel abierta</li>
        <li>Combos</li>
        <li>Cremas</li>

    </ul>
</nav>
<CardWidget/>

   </header>
  )
}

export default NavBar