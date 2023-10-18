import React , { useState } from 'react';
import AboutIntro from './about_components/AboutIntro';
import AboutEnd from './about_components/AboutEnd';
import ScrollTop from './ScrollTop';

const About = () => {

  const [ check , set_check ] = useState(false);

  return (
    <main 
      onWheel={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}
      onTouchMove={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}
    >
      <AboutIntro />
      <AboutEnd />
      {check && <ScrollTop 
                  set_check={set_check}
                />} 
    </main>
  )
}

export default About
