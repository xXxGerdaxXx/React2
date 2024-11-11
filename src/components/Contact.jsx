import React from 'react';
import '../index.css';
import ContactForm from './ContactForm'; 
import emailIcon from '../assets/images/email.svg';
import careerIcon from '../assets/images/career.svg';
import arrowIcon from '../assets/images/Vector.svg';

function Contact() {
  return (
    <section className="full-width-wrapper-index2">
      <div className="contact-us-index2">
        <div className="contact-details-index2">
          <h1>Contact us</h1>

          
          <div className="contact-item-index2">
            <div className="contact-icon-index2">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="contact-text-index2">
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message <img src={arrowIcon} alt="Arrow" /></a>
            </div>
          </div>

          
          <div className="contact-item-index2">
            <div className="contact-icon-index2">
              <img src={careerIcon} alt="Careers Icon" />
            </div>
            <div className="contact-text-index2">
              <h3>Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <a href="#">Send an application <img src={arrowIcon} alt="Arrow" /></a>
            </div>
          </div>
        </div>

        
        <ContactForm /> 
      </div>
    </section>
  );
}

export default Contact;
