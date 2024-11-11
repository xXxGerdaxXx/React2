import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';  
import nextBtnIcon from '../assets/images/next-btn.svg';  
import iphonesImage from '../assets/images/iphones.svg';  

const HeroSection = () => {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-heading-tablet">Manage All Your Money in One App</h1>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Manage All Your Money in One App</h1>
            <p className="hero-description">
              We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
            </p>

            <div className="store-buttons">
              <a href="#" className="store-button app-store">
                <FontAwesomeIcon icon={faApple} size="2x" style={{ marginRight: '10px' }} />
                <span className="text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </span>
              </a>
              <a href="#" className="store-button google-play">
                <FontAwesomeIcon icon={faGooglePlay} size="2x" style={{ marginRight: '10px' }} />
                <span className="text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>


            <div className="discover-container">
              <button className="discover-button">
                <img
                  className="discover-icon"
                  src={nextBtnIcon}  
                  alt="Next button icon leading to more information"
                />
                <span className="discover-text">Discover more</span>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              className="hero-image"
              src={iphonesImage}  
              alt="App Preview Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
