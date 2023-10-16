import React, { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact_form from '../../images/contact/contact_form.png';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdzvu3q', 'template_3nq2lv6', form.current, 'm2qlABllOuw2NPYa0')
      .then((result) => {
          set_bg_color('green');
          set_text('✓ Sent');
          setTimeout(() => {
            set_bg_color('rgb(87, 98, 253)');
            set_text('Send')
          }, 1000);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const [ bg_color , set_bg_color ] = useState('rgb(87, 98, 253)');
  const [ text , set_text ] = useState('Send');
  const send_style = {backgroundColor: bg_color};

  return (
    <>
      <section className="contact_section" id="contact_us">
        <form 
          className="contact_section__card"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="contact_section__card__desc">
            <h3>
              Share your thoughts with us
            </h3>
            <p>
              Mention your message as briefly as possible
            </p>
            <input name="from_name" type="text" className="common" placeholder="Your Name" required />
            <input name="form_email" type="email" className="common" placeholder="Your E-mail" required />
            <input name="subject" type="text" className="common" placeholder="Subject" required />
            <textarea name="message" className="message" placeholder="Share your message here" rows="8" required />
          </div>
          <div className="contact_section__card__img">
            <img src={contact_form} alt="kapfrost_contact_us" />
            <button 
              type='submit' 
              style={send_style} 
              onMouseOver={() => set_bg_color('black')}
              onMouseLeave={() => set_bg_color('rgb(87, 98, 253)')}
            >
              {text}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ContactForm
