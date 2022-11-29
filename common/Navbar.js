import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="col-md-7 site-navigation">
          <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link href="/">Home</Link>              
          </li> 
            <li className="nav-item">
              <Link href="/products-list">Products</Link>
              <div className="submenu">
                <ul>
                  <li className="nav-item">
                    <Link href="/about">Buy</Link>              
                  </li> 
                  <li className="nav-item">
                    <Link href="/about">Rent</Link>              
                  </li> 
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about">About</Link>
              <div className="submenu">
                <ul>
                  <li className="nav-item">
                    <Link href="/about">Sell</Link>              
                  </li> 
                  <li className="nav-item">
                    <Link href="/about">Rent</Link>              
                  </li> 
                </ul>
              </div>
            </li>   
                  
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Navbar
