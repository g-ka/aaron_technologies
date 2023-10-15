import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

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
  const career_images = [['communication.png','personality.png','adaptability.png'],
                         ['empathy.png','patience.png','active_listening.png'],
                         ['hardware.png','analytical.png','security.png'],
                         ['creative.png','user_centered.png','detail.png'],
                         ['stack_proficiency.png','problem_solving.png','responsive.png'],
                         ['programming_efficiency.png','scalability.png','data_management.png'],
                         ['versatile.png','project_management.png','continuous_learning.png']
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
                  <img src={`./images/courses/career/${career_images[number-1][0]}`} />
                  <p>{hover_info[number-1][0]}</p>
                </div>
                <div className='image_div'>
                  <img src={`./images/courses/career/${career_images[number-1][1]}`} />
                  <p>{hover_info[number-1][1]}</p>
                </div>
                <div className='image_div'>
                  <img src={`./images/courses/career/${career_images[number-1][2]}`} />
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
