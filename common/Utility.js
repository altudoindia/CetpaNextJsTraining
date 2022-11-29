import React from 'react'
import Link from 'next/link';

const Utility = () =>{
    return(
        <>
            <div className="col-md-3 component-utility">
            <ul className=" d-flex">
                <li className="nav-item">
                <Link href="/">Login</Link>
                    <ul className="submenu">
                        <li className="nav-item">
                        <Link href="/">User Login </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/about">Admisistrator</Link>
                        </li>
                    
                    </ul>
                </li>
                <li className="nav-item">
                <Link href="/about">Register</Link>
                </li>
            
             </ul>

            </div>
         
        </>
    )
}
export default Utility