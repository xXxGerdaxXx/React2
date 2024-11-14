import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const ContactBox = ({ icon, text, link, image }) => {
  return (
    <div className="contact-box">
      <div className="contact-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{text}</p>
      <a href={link}>
        Contact us <img src={image} alt="Arrow" />
      </a>
    </div>
  );
};

export default ContactBox;
