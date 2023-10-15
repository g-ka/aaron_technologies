import React from 'react';

const ViewList = ({ number }) => {

  const view_list = [['Effective Communication',
                      'Confidence Building',
                      'Interpersonal Skills',
                      'Emotional Intelligence',
                      'Time Management and Organization',
                      'and much more.....',
                    ],
                    ['Effective Communication Skills',
                     'Customer Service Etiquette',
                     'Product/Service Knowledge',
                     'Problem Solving and Conflict Resolution',
                     'and much more.....'
                    ],
                    ['Hardware Fundamentals',
                     'Network Fundamentals',
                     'Operating Systems',
                     'Troubleshooting and Maintenance',
                     'Security',
                     'cloud computing',
                     'and much more.....'
                    ],
                    ['User-Centered Design (UCD)',
                     'Design Principles',
                     'Wireframing and Prototyping',
                     'information architecture',
                     'navigation design',
                     'and much more.....'
                    ],
                    ['HTML',
                     'CSS',
                     'CSS preprocessors',
                     'JavaScript',
                     'Responsive Web Design',
                     'javascipt library',
                     'and much more.....'
                    ],
                    ['Front-End Development',
                     'Server-Side Programming',
                     'Database Management',
                     'API Development',
                     'Authentication and Security',
                     'and much more.....'
                    ]];

  return (
    <ul className='courses_grid_course_list'>
      {
        view_list[number-1].map((item, ind) =>
          (
            ind == view_list[number-1].length - 1 ?
             <li key={item} 
                 className='courses_grid_course_list_special_item' 
                 onClick={() => window.alert('Further information on each course will be provided soon! Thanks for visiting us. Happy Teching :)')}>
              {item}
             </li> :
              <li key={item}>- {item}</li>
          ))
      }
    </ul>
  )
}

export default ViewList
