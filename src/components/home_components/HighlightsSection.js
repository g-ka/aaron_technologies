import React from 'react';
import years_15 from '../../images/home/points_to_highlight/15_years.png';
import bookmark from '../../images/home/points_to_highlight/bookmark.png';
import great_bond from '../../images/home/points_to_highlight/great_bond.png';
import low_price from '../../images/home/points_to_highlight/low_price.png';
import depth_analysis from '../../images/home/points_to_highlight/depth_analysis.png';
import love_for_learning from '../../images/home/points_to_highlight/love_for_learning.png';
import doubt_session from '../../images/home/points_to_highlight/doubt_session.png';
import certification from '../../images/home/points_to_highlight/certification.png';
import assured_career from '../../images/home/points_to_highlight/assured_career.png';

const HighlightsSection = () => {
  return (
    <section className='highlights_section'>
      <div className='years_15'>
        <img src={years_15} alt='tech_pionner_celebrate'/>
        <p>15+ years since est.2008</p>        
        <img src={bookmark}  className='bookmark_image' alt='bookmark'/>
      </div>
      <div className='great_bond'>        
        <img src={great_bond} alt='great_bond'/>
        <p>great mentor student bond</p>
      </div>
      <div className='low_price'>        
        <img src={low_price} alt='budget_friendly_+_quality'/>
        <p>premium learning at modest cost</p>
      </div>
      <div className='depth_learning'>        
        <img src={depth_analysis} alt='detailed_learning' />
        <p>conceptual scrutiny</p>
      </div>
      <div className='love_learning'>        
        <img src={love_for_learning} alt='passion_for_learning' />
        <p>igniting a love for learning through experiential education</p>
      </div>
      <div className='doubt_resolution'>        
        <img src={doubt_session} alt='dount_resolution'/>
        <p>round the clock mentorship for doubt resolution</p>
      </div>
      <div className='certification'>        
        <img src={certification} alt='course_certificate'/>
        <p>Certification upon course completion</p>
      </div>
      <div className='career_path'>        
        <img src={assured_career} alt='defines_career'/>
        <p>assured career path</p>
      </div>
    </section>
  )
}

export default HighlightsSection
