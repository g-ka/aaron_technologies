import React , { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {

  const [ transform , set_transform ] = useState(0);
  const style = {color: 'black', transform: `rotate(${transform}deg)`};

  return (
    <section className='news_section'>
      <div className='news_section_desc'>
        <p className='news_section_desc_get'>get</p>
        <p className='news_section_desc_inspired'>inspired</p>
        <p className='news_section_desc_with_the'>with the</p>
        <p className='news_section_desc_latest'>latest</p>
        <p className='news_section_desc_tech'>tech</p>
        <p className='news_section_desc_updates'>updates</p>
      </div>      
      <Link to='/articles' 
            className='news_section_link' 
            onMouseOver={() => set_transform(45+360)}
            onMouseLeave={() => set_transform(0)}
            onClick={() => window.scrollBy(0,-window.pageYOffset)}
      >
        <i className='bx bx-right-top-arrow-circle news_section_link_icon' style={style}></i>
      </Link>
    </section>
  )
}

export default NewsSection
