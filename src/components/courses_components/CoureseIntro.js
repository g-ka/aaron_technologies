import React from 'react';
import mark from '../../images/home/hero_image/mark.png';

const CoureseIntro = () => {
  return (
    <div className='courses_intro'>
      <p className='courses_intro_text'>          
        <span className='courses_intro_text_highly'>highly
          <img src={mark} className='courses_intro_text_highly_mark' />
        </span> curated and <span className='courses_intro_text_crafted_courses'>crafted courses</span> to shape your career
      </p>
    </div>
  )
}

export default CoureseIntro
