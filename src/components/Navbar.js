import { Link } from 'gatsby'
import React from 'react'
import '../styles/global.css'


export default function Navbar() {
  return (
    
    <nav>
        
        <a href="#home" id="logo">test
        </a>
        
        <div className='links'>
            <Link className='home' to="/"> Home </Link>
            <Link className='about' to="/about"> About </Link>
            <Link className='contact' to="/contact"> Contact </Link>
            {/* <Link className='contact' to="/projects"> Contact </Link> */}
        </div>
     </nav>
    
    
  )
}
