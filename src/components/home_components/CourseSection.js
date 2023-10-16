import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mark_animation from '../../images/home/courses_section/mark_animation.gif';

const CourseSection = () => {

  const [ transform , set_transform ] = useState(0);
  const style = {color: 'white', transform: `rotate(${transform}deg)`};

  return (
    <section className='course_section'>
      <div className='course_section_image_desc'>
        <p className='course_section_image_desc_desc'>
          <span className='course_section_image_desc_desc_exploring'>Exploring
            <img src={mark_animation} className='course_section_image_desc_desc_exploring_mark'/>
          </span> the Spectrum of Technological Evolution From <span className='course_section_image_desc_desc_foundational'>Foundational Fundamentals</span> to the Pinnacle of Progress    
        </p>
      </div>
      <Link to='/courses&career' 
            className='course_section_link' 
            onMouseOver={() => set_transform(45+360)}
            onMouseLeave={() => set_transform(0)}
            onClick={() => window.scrollBy(0,-window.pageYOffset)}
      >
        <div className='course_section_link_div'>
          <p className='course_section_link_div_para'>
            check Courses
          </p> 
          <i className='bx bx-right-top-arrow-circle course_section_link_div_icon' style={style}></i>
        </div>    
      </Link>
    </section>
  )
}

export default CourseSection
