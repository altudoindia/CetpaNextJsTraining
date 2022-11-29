import React from 'react'
import Container from './PageStructure/Container'
import Navbar from './Navbar'
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className='footer-logo col-md-2'>
            <img src="/site-logo.png" alt="Vercel Logo"  />   
          </div>
          <Navbar />
         <div className="col-12 copyright"><p>All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2022 Sahu Constructions Limited.</p></div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
