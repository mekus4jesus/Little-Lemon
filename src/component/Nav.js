import React from 'react'
import logo from '../assets/img/Logo .svg'

export const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <header className="logo">
          <img src={logo} alt='logo'/>
        </header>
        <div className="pageLink">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


