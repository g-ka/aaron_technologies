import React, { useState } from 'react';
import CoureseIntro from './courses_components/CoureseIntro';
import CoursesList from './courses_components/CoursesList';
import CareerIntro from './courses_components/CareerIntro';
import CareerList from './courses_components/CareerList';
import ScrollTop from './ScrollTop';

const Courses = () => {

  const [ check , set_check ] = useState(false);

  return (
    <main className='courses' 
          onWheel={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}
    >     
      <CoureseIntro /> 
      <CoursesList />
      <CareerIntro />
      <CareerList />
      {check && <ScrollTop 
                  set_check={set_check}
                />}
    </main>
  )
}

export default Courses
