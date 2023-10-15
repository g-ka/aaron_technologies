import React , { useState } from 'react';
import ContactForm from './contact_components/ContactForm';
import ContactIntro from './contact_components/ContactIntro';
import ContactEnd from './contact_components/ContactEnd';
import ScrollTop from './ScrollTop';

const Contact = () => {

  const [ check , set_check ] = useState(false);

  return (
    <main onWheel={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}>
      <ContactIntro />
      <ContactForm />
      <ContactEnd />
      {check && <ScrollTop 
                  set_check={set_check}
                />}
    </main>
  )
}

export default Contact
