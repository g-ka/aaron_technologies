import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import communication from '../../images/courses/career/communication.png'; 
import personality from '../../images/courses/career/personality.png'; 
import adaptability from '../../images/courses/career/adaptability.png'; 
import empathy from '../../images/courses/career/empathy.png'; 
import patience from '../../images/courses/career/patience.png'; 
import active_listening from '../../images/courses/career/active_listening.png'; 
import hardware from '../../images/courses/career/hardware.png'; 
import analytical from '../../images/courses/career/analytical.png'; 
import security from '../../images/courses/career/security.png'; 
import creative from '../../images/courses/career/creative.png'; 
import user_centered from '../../images/courses/career/user_centered.png'; 
import detail from '../../images/courses/career/detail.png'; 
import stack_proficiency from '../../images/courses/career/stack_proficiency.png'; 
import problem_solving from '../../images/courses/career/problem_solving.png'; 
import responsive from '../../images/courses/career/responsive.png'; 
import programming_efficiency from '../../images/courses/career/programming_efficiency.png'; 
import scalability from '../../images/courses/career/scalability.png'; 
import data_management from '../../images/courses/career/data_management.png'; 
import versatile from '../../images/courses/career/versatile.png'; 
import project_management from '../../images/courses/career/project_management.png'; 
import continuous_learning from '../../images/courses/career/continuous_learning.png'; 

const CareerList = () => {

  const no_of_careers = [1,2,3,4,5,6,7];
  const career_names = ['public relations manager',
                        'customer service representative',
                        'network administrator',
                        'ui/ux/web designer',
                        'front-end web deveoloper',
                        'back-end web developer',
                        'fullstack web developer'
                      ];
  const career_images = [[communication,personality,adaptability],
                         [empathy,patience,active_listening],
                         [hardware,analytical,security],
                         [creative,user_centered,detail],
                         [stack_proficiency,problem_solving,responsive],
                         [programming_efficiency,scalability,data_management],
                         [versatile,project_management,continuous_learning]
                        ];                      
  const hover_info = [['communication','personality','adaptability'],
                      ['interpersonal intelligence','patience','active listening'],
                      ['technical','analytical','security'],
                      ['creative','user centered','importance to detail'],
                      ['frontend stack','problem solving','responsive design'],
                      ['programming efficiency','scalability','data management'],
                      ['versatile stack','project management','continuous learning']
                    ];                        

  return (
    <div className='courses_career_list'>
      {
        no_of_careers.map(number =>
          (
            <div className={`courses_career_list_${number} embose`}
                 key={number}
                 onClick={() => window.alert('Further information on each job role will be provided soon! Thanks for visiting us. Happy Teching :)')}
            >
              <p className={`courses_career_list_${number}_role`}>
                {career_names[number-1]}
              </p>
              <div className={`courses_career_list_${number}_essentials image_set_div`} onClick={(e) => e.stopPropagation()}>
                <div className='image_div'>
                  <img src={career_images[number-1][0]} />
                  <p>{hover_info[number-1][0]}</p>
                </div>
                <div className='image_div'>
                  <img src={career_images[number-1][1]} />
                  <p>{hover_info[number-1][1]}</p>
                </div>
                <div className='image_div'>
                  <img src={career_images[number-1][2]} />
                  <p>{hover_info[number-1][2]}</p>
                </div>
              </div>              
            </div>
          ))
      }
    </div>
  )
}

export default CareerList
