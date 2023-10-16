import React from 'react';
import tech_meditation from '../../images/about/tech_meditation.png';
import scribble from '../../images/about/scribble.gif';

const AboutIntro = () => {
  return (
    <div className='about_intro'>
      <div className='about_intro_image_hash'>
        <p className='about_intro_image_hash_hash'>
          <i><span>#</span>let's tech together</i>
        </p>
        <img 
          className='about_intro_image_hash_image' 
          src={tech_meditation}
        />
      </div>
      <p className='about_intro_content'>
      Unlock your potential with Aaron Tech's 'it', AI and web dev training. Be industry-<span className='about_intro_content_img'>ready
        <img 
          src={scribble}
          className='about_intro_content_img_scribble' 
        /> 
      </span> 
      </p>
    </div>
  )
}

export default AboutIntro
