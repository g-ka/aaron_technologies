import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [ opacity , set_opacity ] = useState(false);
  const burger_style = {opacity: opacity ? '1' : '0', pointerEvents: opacity ? 'auto' : 'none'}

  return (
    <header onLoad={() => set_opacity(prev => !prev)}>
      <Link to='/' className='brand_name'> AaronTech </Link>
      <nav className='primary_nav'>
        <Link to='/' className='nav_link'> Home </Link>
        <Link 
          to='/courses&career' 
          className='nav_link'
          onClick={() => window.scrollBy(0,-window.pageYOffset)}
        > 
          Courses & Career 
        </Link>
        <Link to='/about' className='nav_link'> About </Link>
      </nav>
      <nav className='secondary_nav'>
        <Link to='/articles' className='news_link'>
        <i className='bx bxs-spreadsheet news_icon'></i>
        </Link>
        <Link to='/contact' className='contact_link'>
          <i className='bx bxs-phone contact_icon'></i>
        </Link>
      </nav>
      <i className='bx bx-menu menu_icon' onClick={() => set_opacity(prev => !prev)}>
        <div className='burger_menu' style={burger_style}>
          <Link to='/' >home</Link>
          <Link to='/courses&career' >courses&career</Link>
          <Link to='/articles' >articles</Link>
          <Link to='/about' >about</Link>
          <Link to='/contact' >contact</Link>
        </div>
      </i>
    </header>
  )
}

export default Header
