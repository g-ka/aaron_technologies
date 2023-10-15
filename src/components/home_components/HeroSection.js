import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <p className='hero_section_caption'>
        Transform Your Technological Passion into a Lucrative <span className='hero_section_caption_career'>
          Career
          <img src='./images/home/hero_image/scribble_animation.gif' className='hero_section_caption_career_decoration1' alt='underline_highlight' />
        </span> Path        
        <img src='./images/home/hero_image/mark.png' className='hero_section_caption_decoration2' alt='scribble_highlight'/>
      </p>
      <div className='hero_section_image_desc'>
        <img src='./images/home/hero_image/hero_image.png' className='hero_section_image_desc_image' alt='man_working_in_computer_passionately' />
        <p className='hero_section_image_desc_vertical_caption'>
          <i>" Let's tech together a great world "</i>
        </p>
        <img src='./images/home/hero_image/idea.png' className='hero_section_image_desc_decoration' alt='brain_activation'/>
      </div>
    </section>
  )
}

export default HeroSection
