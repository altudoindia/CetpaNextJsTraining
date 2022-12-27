import React from 'react'
import Link from 'next/link';

const Utility = () =>{
    return(
        <>
            <div className="col-md-3 component-utility">
            <ul className=" d-flex">
                <li className="nav-item">
                <Link href="/userlogin">Login</Link>
                    {/* <ul className="submenu">
                        <li className="nav-item">
                        <Link href="">User Login </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/userlogin">Admisistrator</Link>
                        </li>
                    
                    </ul> */}
                </li>
                <li className="nav-item">
                <Link href="/ragistration">Register</Link>
                </li>
            
             </ul>

            </div>
         
        </>
    )
}
export default Utility