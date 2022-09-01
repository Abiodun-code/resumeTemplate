import React from 'react'
import '../styles/DivideContent.css'
import Box from './Box'
import Content from './Content'

const DivideContent = () => {
  return (
    <div className='Divide'>
      <div className="Divide_wrap">
        <div className="Divide_shift">
          <Box />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default DivideContent