import React, { useState } from 'react';
import HeroSection from './home_components/HeroSection';
import HighlightsSection from './home_components/HighlightsSection';
import CourseSection from './home_components/CourseSection';
import NewsSection from './home_components/NewsSection';
import MissionSection from './home_components/MissionSection';
import ScrollTop from './ScrollTop';

const Home = () => {

  const [ check , set_check ] = useState(false);

  return (
    <main onWheel={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}>
      <HeroSection />
      <HighlightsSection />
      <CourseSection />
      <NewsSection />
      <MissionSection />
      {check && <ScrollTop 
                  set_check={set_check}
                />}             
    </main>
  )
}

export default Home
