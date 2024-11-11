import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../index.css';


const MobileMenuButton = ({ onClick }) => {
  return (
    <button className="btn-mobile" onClick={onClick}>
      { <FontAwesomeIcon icon={faBars} />}
      <span className="hamburger"></span>
      <span className="hamburger"></span>
      <span className="hamburger"></span>
    </button>
  );
};


export default MobileMenuButton;
