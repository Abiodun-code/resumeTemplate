import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar' data-aos="fade-left" data-aos-duration="2000">
      <div className="NavBar_wrap">
        <ul className='NavBar_ul'>
          <Link className='NavBar_li' to={'/'}>About</Link>
          <Link className='NavBar_li' to={'/service'}>Services</Link>
          <Link className='NavBar_li' to={'/'}>Works</Link>
          <Link className='NavBar_li' to={'/contact'}>Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar