import React from 'react';
import mark from '../../images/home/hero_image/mark.png';

const ContactIntro = () => {
  return (
    <div className='courses_intro'>
      <p className='courses_intro_text'>          
        <span className='courses_intro_text_highly'>Connect
          <img src={mark} className='courses_intro_text_highly_mark' />
        </span> the circuits of <span className='courses_intro_text_crafted_courses'>knowledge: sparks</span> start here
      </p>
    </div>
  )
}

export default ContactIntro
