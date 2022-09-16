import React from 'react'
import '../styles/NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='NavBar' data-aos="fade-left" data-aos-duration="2000">
      <div className="NavBar_wrap">
        <ul className='NavBar_ul'>
          <NavLink className={({isActive})=>isActive ? 'NavBar_li_act' : 'NavBar_li'} to={'/'}>About</NavLink>
          <NavLink className={({isActive})=>isActive ? 'NavBar_li_act' : 'NavBar_li'} to={'/service'}>Services</NavLink>
          <NavLink className={({isActive})=>isActive ? 'NavBar_li_act' : 'NavBar_li'} to={'/works'}>Works</NavLink>
          <NavLink className={({isActive})=>isActive ? 'NavBar_li_act' : 'NavBar_li'} to={'/contact'}>Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar