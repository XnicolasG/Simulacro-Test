import React from 'react';
import { Link } from 'react-router-dom';
import '../style/StyledNav.css'

export const Navbar = () => {

  return (

      <nav>
          <h2>Inventarios</h2>
          <div className='cont'>
              <Link className='links' to="/Registro">Registro</Link>
              <Link  className='links'to="/Listado">Listado</Link>
          </div>
      </nav>

  )
};
