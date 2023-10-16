import React , { useState } from 'react';
import ViewList from './ViewList';
import persona_communication from '../../images/courses/persona_communication.png';
import callcenter_training from '../../images/courses/callcenter_training.png';
import hardware_networking from '../../images/courses/hardware_networking.png';
import ui_ux from '../../images/courses/ui_ux.png';
import frontend from '../../images/courses/frontend.png';
import backend from '../../images/courses/backend.png';

const CoursesList = () => {

  const [ text1 , set_text1 ] = useState('view');
  const [ course1 , set_course1 ] = useState('courses_grid_course');    
  const [ text2 , set_text2 ] = useState('view');
  const [ course2 , set_course2 ] = useState('courses_grid_course'); 
  const [ text3 , set_text3 ] = useState('view');
  const [ course3 , set_course3 ] = useState('courses_grid_course');    
  const [ text4 , set_text4 ] = useState('view');
  const [ course4 , set_course4 ] = useState('courses_grid_course'); 
  const [ text5 , set_text5 ] = useState('view');
  const [ course5 , set_course5 ] = useState('courses_grid_course');    
  const [ text6 , set_text6 ] = useState('view');
  const [ course6 , set_course6 ] = useState('courses_grid_course'); 

  const no_of_courses = [1,2,3,4,5,6];
  const course_image = [persona_communication,
                        callcenter_training,
                        hardware_networking,
                        ui_ux,
                        frontend,
                        backend
                      ];
  const course_names = ['communication & personality development',
                        'Call Center Training',
                        'Hardware & Networking',
                        'UI/UX - web designing',
                        'fornt-end web development',
                        'fullstack web development'
                      ];
  const texts = [text1, text2, text3, text4, text5, text6];
  const courses = [course1 , course2, course3, course4, course5, course6];

  const change_text = (num) =>
  {
    if(num == 1)
    {
      if(text1 === 'view')
      set_text1('back');
      else
      set_text1('view');
    }
    else if(num == 2)
    {
      if(text2 === 'view')
      set_text2('back');
      else
      set_text2('view');
    }
    else if(num == 3)
    {
      if(text3 === 'view')
      set_text3('back');
      else
      set_text3('view');
    }
    else if(num == 4)
    {
      if(text4 === 'view')
      set_text4('back');
      else
      set_text4('view');
    }
    else if(num == 5)
    {
      if(text5 === 'view')
      set_text5('back');
      else
      set_text5('view');
    }
    else if(num == 6)
    {
      if(text6 === 'view')
      set_text6('back');
      else
      set_text6('view');
    }
  }

  const view_course = (num) =>
  {
    if(num == 1)
    {
      set_course1('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
    else if(num == 2)
    {
      set_course2('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
    else if(num == 3)
    {
      set_course3('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
    else if(num == 4)
    {
      set_course4('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
    else if(num == 5)
    {
      set_course5('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
    else if(num == 6)
    {
      set_course6('courses_grid_course flip-vertical-left'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400);  
    }  
  }

  const back_course = (num) =>
  {
    if(num == 1)
    {
      set_course1('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    }   
    else if(num == 2)
    {
      set_course2('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    } 
    else if(num == 3)
    {
      set_course3('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    } 
    else if(num == 4)
    {
      set_course4('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    } 
    else if(num == 5)
    {
      set_course5('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    } 
    else if(num == 6)
    {
      set_course6('courses_grid_course flip-vertical-right'); 
      setTimeout(() =>
      {
        change_text(num);
      }, 400); 
    } 
  }

  return (
    <div className='courses_grid'>
      {
        no_of_courses.map(number =>
          (
            <div className={courses[number-1]} key={number}>
              {texts[number-1] === 'view' ? 
                <>                  
                  <img src={course_image[number-1]} className={`courses_grid_course_image${number}`} />
                  <p className='courses_grid_course_heading'>
                    {`${course_names[number-1]}`}
                  </p>
                  <div className='courses_grid_course_buttons'>
                    <button 
                      className='courses_grid_course_buttons_1'
                      onClick={() => view_course(number) }
                    >{texts[number-1]}</button>
                    <button 
                      className='courses_grid_course_buttons_2'
                      onClick={() => window.alert('Courses will soon be opened for sale! Thanks for visiting us. Happy Teching :)')}
                    >
                      buy
                    </button>
                  </div>
                </> : 
                <>
                  <ViewList number={number}/>
                  <div className='courses_grid_course_buttons'>
                    <button 
                      className='courses_grid_course_buttons_1'
                      onClick={() => back_course(number) }
                    >{texts[number-1]}</button>
                    <button 
                      className='courses_grid_course_buttons_2'
                      onClick={() => window.alert('Courses will soon be opened for sale! Thanks for visiting us. Happy Teching :)')}
                    >
                      buy
                    </button>
                  </div>
                </>
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default CoursesList
