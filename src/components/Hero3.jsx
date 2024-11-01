import React from 'react';
import diagramImage from '../assets/images/diagram.svg'; // Adjust the path as needed
import paymentCardImage from '../assets/images/payment-card.svg'; // Adjust the path as needed
import vector1Image from '../assets/images/vector1.svg'; // Adjust the path as needed
import vector5Image from '../assets/images/vector5.svg'; // Adjust the path as needed

const Hero3Section = () => {
  return (
    <section className="hero3">
      {/* Section 1 */}
      <div className="section-1">
        <div className="hero3-content">
          <h2>
            Make your money <br /> transfer simple and clear
          </h2>
          <div className="hero3-content-list">
            <ul>
              <li>
                <span className="checkmark"></span> Banking transactions are free for you
              </li>
              <li>
                <span className="checkmark"></span> No monthly cash commission
              </li>
              <li>
                <span className="checkmark"></span> Manage payments and transactions online
              </li>
            </ul>
          </div>
          <a href="#" className="btn-primary2">
            <span>Learn more</span>
          </a>
        </div>
        <div className="hero3-image1">
          <img src={diagramImage} alt="Illustration of money transfer process" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-2">
        <div className="hero3-image2">
          <img src={paymentCardImage} alt="International payment illustration" />
        </div>
        <div className="hero3-content2">
          <h2>Receive payment from international bank details</h2>
          <div className="payment-container">
            <div className="payment-detail">
              <img src={vector1Image} alt="Payment management icon" />
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="payment-detail">
              <img src={vector5Image} alt="Wallet icon" />
              <p>A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
          </div>
          <a id="auth-signin" href="#" className="btn-primary2">
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3Section;
