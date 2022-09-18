import React from 'react'
import SearchBar from './search'
import {Link} from 'react-router-dom'
import img from '../../img/clima (1).png'
import '../Nav/Nav.css'
import {AiOutlineInfoCircle} from 'react-icons/ai';

export default function Nav({onSearch}){
  return(
    <div className = 'navBar'>
      <nav className = 'navbar navbar-dark bg-dark navBar'>
        <Link to = '/'>
          <span className = 'navbar-brand'>
            <img
              id = 'logo'
              src = {img}
              width = '30'
              height = '30'
              className = 'd-inline-block align-top'
              alt = 'Imagen no encontrada'
            />
            Weather App
          </span>
        </Link>
        <Link to = '/about'>
          <span className = 'navbar-brand'><AiOutlineInfoCircle/></span>
        </Link>
        <div>
          <SearchBar onSearch = {onSearch}/>
        </div>
      </nav>
    </div>
  )
}