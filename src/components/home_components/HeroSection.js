import React from 'react';
import scribble_animation from '../../images/home/hero_image/scribble_animation.gif';
import mark from '../../images/home/hero_image/mark.png';
import hero_image from '../../images/home/hero_image/hero_image.png';
import idea from '../../images/home/hero_image/idea.png';

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <p className='hero_section_caption'>
        Transform Your Technological Passion into a Lucrative <span className='hero_section_caption_career'>
          Career          
          <img src={scribble_animation} className='hero_section_caption_career_decoration1' alt='underline_highlight' />
        </span> Path                
        <img src={mark} className='hero_section_caption_decoration2' alt='scribble_highlight'/>
      </p>
      <div className='hero_section_image_desc'>        
        <img src={hero_image} className='hero_section_image_desc_image' alt='man_working_in_computer_passionately' />
        <p className='hero_section_image_desc_vertical_caption'>
          <i>" Let's tech together a great world "</i>
        </p>        
        <img src={idea} className='hero_section_image_desc_decoration' alt='brain_activation'/>
      </div>
    </section>
  )
}

export default HeroSection
