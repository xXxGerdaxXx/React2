import React from 'react';

const SubscribeRight = ({ email, handleChange, handleSubmit, mailIcon }) => {
  return (
    <div className="subscribe-right">
      <div className="envelope-icon-container">
        <img className="envelope-icon" src={mailIcon} alt="Envelope Icon" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeRight;
