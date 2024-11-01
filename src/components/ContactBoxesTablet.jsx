import React from 'react';
import contactImage1 from '../assets/images/Contact-Us-tablet.svg';
import contactImage2 from '../assets/images/Contact-Us-tablet2.svg';

const ContactBoxesTablet = () => {
  return (
    <div className="contact-boxes-tablet">
      <div className="contact-box-tablet">
        <img src={contactImage1} alt="Contact us by phone." />
        <img src={contactImage2} alt="Contact us by phone." />
      </div>
    </div>
  );
};

export default ContactBoxesTablet;