import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const SignInButton = () => {
  return (
    <a id="auth-signin" href="#" className="btn-primary">
      <FontAwesomeIcon icon={faUserLarge} style={{ marginRight: '0.5rem' }} />
      <span>Sign in / up</span>
    </a>
  );
};

export default SignInButton;
