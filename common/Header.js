import React from 'react'
import Navbar from './Navbar'
import Utility from './Utility'

import Container from './PageStructure/Container'

const Header = () => {
  return (
    <>
    <header>
     <Container>
      <div className='site-logo col-md-2'>
        <img src="/site-logo.png" alt="Vercel Logo"  />   
      </div>
      <Navbar />
      <Utility/>
      </Container>
      </header>
    </>
   
  )
}

export default Header
