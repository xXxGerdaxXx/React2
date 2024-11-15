import React from 'react';

const SubscribeRight = ({ email, handleChange, handleSubmit, mailIcon }) => {
  return (
<div className="subscribe-right">
  <div className="envelope-icon-container">
    <img className="envelope-icon" src={mailIcon} alt="Envelope Icon" />
  </div>
  <form onSubmit={handleSubmit} noValidate>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Your Email"
      autoComplete="email"
      value={email}
      onChange={handleChange}
      className="email" 
    />
    <button type="submit" className="subscribe-button">Subscribe</button> {/* Make sure this matches your CSS */}
  </form>
</div>
  );
};

export default SubscribeRight;
