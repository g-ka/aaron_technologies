import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MissionSection = () => {

  const [ transform1 , set_transform1 ] = useState(0);
  const style1 = {transform: `rotate(${transform1}deg)`};

  const [ transform2 , set_transform2 ] = useState(0);
  const style2 = {transform: `rotate(${transform2}deg)`};

  const curved_text = "Weaving Salem City's essence into the digital fabric - ";

  return (
    <section className='mission_section'>
      {/* <img src='./images/home/mission_section/web_globe.jpg' className='mission_section_image' /> */}
      <div className="mission_section_circle">
        <div className="mission_section_circle_logo" style={{backgroundImage: 'url(./images/home/mission_section/web_globe.jpg)'}}></div>
        <div className="mission_section_circle_text">
          <p>
            {curved_text.split('').map((char,ind) =>
              <span key={ind} style={{transform: `rotate(${ind*6.5}deg)`}}>{char}</span>       
            )}
          </p>
        </div>
      </div>
      <div className='mission_section_desc'>
        <div className='mission_section_desc_content'>
          <p className='mission_section_desc_content_head'>
            Aaron Technologies
            <img src='./images/home/mission_section/stripes_animation.gif' className='mission_section_desc_content_head_stripes' />
          </p>
          <p className='mission_section_desc_content_about'>A Salem-based IT & ITES training and solutions provider, aims to nurture individuals' skills, unlock their potential, and excel in the IT & ITES sector through innovative strategies and professional software development, with a particular focus on preparing candidates as successful Call Center Executives</p>
        </div>
        <div className='mission_section_desc_buttons'>
          <Link to='/about' className='mission_section_desc_buttons_link1' onClick={() => window.scrollBy(0,-window.pageYOffset)}>
            <button 
              className='mission_section_desc_buttons_link1_button1'
              onMouseOver={() => set_transform1(45+360)}
              onMouseLeave={() => set_transform1(0)}
            >
              about
              <i className='bx bx-right-top-arrow-circle mission_section_desc_buttons_link1_button1_icon1' style={style1}></i>
            </button>
          </Link>
          <Link to='/contact' className='mission_section_desc_buttons_link2' onClick={() => window.scrollBy(0,-window.pageYOffset)}>
            <button 
              className='mission_section_desc_buttons_link2_button2'
              onMouseOver={() => set_transform2(45+360)}
              onMouseLeave={() => set_transform2(0)}
            >
              Contact
              <i className='bx bx-right-top-arrow-circle mission_section_desc_buttons_link2_button2_icon2' style={style2}></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MissionSection