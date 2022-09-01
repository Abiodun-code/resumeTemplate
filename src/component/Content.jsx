import React from 'react'
import '../styles/Content.css'
import NavBar from './NavBar'
import {Routes, Route} from 'react-router-dom'
import About from './About'
import ScrollToTop from 'react-scroll-to-top'
import Services from './Services'
import Contact from './Contact'

const Content = () => {
  return (
    <div className='Content'>
      <div className="Content_wrap">
        <NavBar />
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/service' element={<Services/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default Content