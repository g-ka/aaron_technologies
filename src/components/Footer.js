import React from 'react';
import { Link } from 'react-router-dom';
import aarontech_logo from '../images/footer/aarontech_logo.gif';

const Footer = () => {

  const date = new Date();

  return (
    <footer className='footer'>
      <hr />
      <div className='footer_box'>
        <div className='footer_box_handles'>
          <p className='footer_box_handles_heading'>connect with us</p>
          <a href='#' className='footer_box_handles_fb'>facebook</a>
          <a href='#' className='footer_box_handles_in'>instagram</a>
          <a href='#' className='footer_box_handles_x'>twitter</a>
          <a href='#' className='footer_box_handles_ln'>linkendin</a>
          <a href='#' className='footer_box_handles_yt'>youtube</a>
        </div>
        <div className='footer_box_nav'>
          <p className='footer_box_nav_heading'>navigation</p>
          <Link to='/' className='footer_box_nav_home' onClick={() => window.scrollBy(0,-window.pageYOffset)}>home</Link>
          <Link to='/courses&career' className='footer_box_nav_courses&career' onClick={() => window.scrollBy(0,-window.pageYOffset)}>courses&career</Link>
          <Link to='/about' className='footer_box_nav_about' onClick={() => window.scrollBy(0,-window.pageYOffset)}>about</Link>
          <Link to='/articles' className='footer_box_nav_articles' onClick={() => window.scrollBy(0,-window.pageYOffset)}>articles</Link>
          <Link to='/contact' className='footer_box_nav_contact' onClick={() => window.scrollBy(0,-window.pageYOffset)}>contact</Link>
        </div>
        <div className='footer_box_logo'>
          <img src={aarontech_logo} />
          <p><span>&copy;</span> aaron tech co {date.getFullYear()}</p>
          <p>Illustration by Icons8 from Ouch!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
