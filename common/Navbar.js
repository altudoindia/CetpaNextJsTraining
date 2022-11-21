import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='row bg-info bg-opacity-50'>





<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link href="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link href="/courses">Courses</Link>
        </li>
        <li class="nav-item">
        <Link href="/facilities">Facilities</Link>
        </li>
        <li class="nav-item">
        <Link href="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link href="/product">product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



        

        
    </div>
  )
}

export default Navbar
