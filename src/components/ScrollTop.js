import React from 'react';

const ScrollTop = ({ set_check }) => {
  return (
    <button 
      className='scroll_top_button'
      onClick={() => {window.scrollBy(0,-window.pageYOffset); set_check(false);}}
    >
      <i className='bx bx-chevrons-up scroll_top_button_icon'></i>
    </button>
  )
}

export default ScrollTop
