import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Container from './PageStructure/Container'

const Layout = ({children}) => {

  return (
    <>         
      <Header />       
        <main>
          <Container> 
          {children}
          </Container>
        </main>
      
      <Footer />
    </>
  )
}

export default Layout
