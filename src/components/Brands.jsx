import React from 'react';
import logo1 from '../assets/images/logo-1.svg'; // Adjust the path
import logo2 from '../assets/images/logo-2.svg'; // Adjust the path
import logo3 from '../assets/images/logo-3.svg'; // Adjust the path
import logo4 from '../assets/images/logo-4.svg'; // Adjust the path
import logo5 from '../assets/images/logo-5.svg'; // Adjust the path
import logo6 from '../assets/images/logo-6.svg'; // Adjust the path

const BrandsSection = () => {
  return (
    <section id="brands">
      <div className="container">
        <div id="brand-1" className="brand-box">
          <img src={logo1} alt="Brand 1" />
        </div>
        <div id="brand-2" className="brand-box">
          <img src={logo2} alt="Brand 2" />
        </div>
        <div id="brand-3" className="brand-box">
          <img src={logo3} alt="Brand 3" />
        </div>
        <div id="brand-4" className="brand-box">
          <img src={logo4} alt="Brand 4" />
        </div>
        <div id="brand-5" className="brand-box">
          <img src={logo5} alt="Brand 5" />
        </div>
        <div id="brand-6" className="brand-box">
          <img src={logo6} alt="Brand 6" />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
