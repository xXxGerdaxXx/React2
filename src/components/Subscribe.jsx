import React, { useState } from 'react';
import notificationIcon from '../assets/images/notification.svg';
import mailIcon from '../assets/images/mail.svg';
import Modal from './AlertBox';
import SubscribeRight from './SubscribeRight'; 

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  if (!email) {
    setError('Email is required');
    setSuccess('');
    setIsModalOpen(true);
    return;
  }


  if (!email.includes('@') || !email.includes('.')) {
    setError('Email must contain "@" and a valid domain');
    setSuccess('');
    setIsModalOpen(true);
    return;
  }

  
  if (!emailPattern.test(email)) {
    setError('Please enter a valid email address');
    setSuccess('');
    setIsModalOpen(true);
    return;
  }


  setError('');

  try {
    const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const contentType = response.headers.get('content-type');
    let result = null;

    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    }

    if (!response.ok) {
      throw new Error(result?.message || 'Failed to subscribe');
    }

    setSuccess('Subscription successful!');
    setEmail('');
    setIsModalOpen(true);
  } catch (err) {
    console.error('Error:', err);
    setError('Failed to subscribe. Please try again later.');
    setIsModalOpen(true);
  }
};


  const closeModal = () => {
    setIsModalOpen(false);
    setError('');
    setSuccess('');
  };

  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-left">
          <div className="subscribe-image">
            <img src={notificationIcon} alt="Notification Icon" />
          </div>
          <h2 className="subscribe-title">Subscribe to our newsletter</h2>
          <h3 className="subscribe-description">
            Subscribe to our newsletter to stay informed about latest updates
          </h3>
        </div>

        
        <SubscribeRight
          email={email}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          mailIcon={mailIcon}
        />
      </div>

      {/* Render Modal when there is an error or success */}
      {isModalOpen && (
        <Modal
          message={error || success}
          onClose={closeModal}
          type={success ? 'success' : 'error'}
        />
      )}
    </div>
  );
}

export default Subscribe;
