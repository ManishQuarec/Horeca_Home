import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll';

export default function Navbar() {

  return (
    <>
      <div className='parent-nav'>
        <nav>
          <div className='logo-parent'>
            <img className='logo' src='assets/images/COMAPANY-LOGO.png'></img>
          </div>

          <div className='ul-parent'>
            <ul className='navbar-options'>
              <li className='nav-listitem ' onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
                <a>Home
                  <div className='line-parent alwys-active'>
                    <img className='like-this' src='assets/images/navigation-lower.png'></img>
                  </div>
                </a>

              </li>
              <Link to='lest-check' smooth={true} duration={500}>
              <li className='nav-listitem only-hover-on'>
                <a>Services
                  <div className='line-parent' >
                    <img className='like-this' src='assets/images/navigation-lower.png'></img>
                  </div>
                </a> </li> 
                </Link>
                <Link to='can-check' smooth={true} duration={500}>
              <li className='nav-listitem only-hover-on'>
                <a>About Us
                  <div className='line-parent'>
                    <img className='like-this' src='assets/images/navigation-lower.png'></img>
                  </div>
                </a></li>
                </Link>
                <Link to='can-one' smooth={true} duration={500}>
              <li className='nav-listitem contact-butn'>
                <a>Contact Us</a></li>
                </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )

}