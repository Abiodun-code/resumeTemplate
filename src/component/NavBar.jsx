import React from 'react'
import '../styles/NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='NavBar' data-aos="fade-up" data-aos-duration="2000">
      <div className="NavBar_wrap">
        <ul className='NavBar_ul'>
          <NavLink className='NavBar_li' to={'/'}>About</NavLink>
          <NavLink className='NavBar_li' to={'/service'}>Services</NavLink>
          <NavLink className='NavBar_li' to={'/contact'}>Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar