import React, { useState } from 'react';
import SuccessWindow from './SuccessWindow';

const SubscribeForm = () => {
  const [mailInput, setMailInput] = useState('');

  const [isincludeAt, setIsincludeAt] = useState(true);
  const [isValidentity, setIsValidentity] = useState(true);

  const inputHandler = (e) => {
    setMailInput(e.target.value);
    setIsincludeAt(true);
    setIsValidentity(true);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (!mailInput.endsWith('.com') && !mailInput.includes('@')) {
      setIsValidentity(false);
      setIsincludeAt(false);
      return;
    }
    if (!mailInput.includes('@')) {
      setIsincludeAt(false);
      return;
    }
    if (!mailInput.endsWith('.com')) {
      setIsValidentity(false);
      return;
    }
    console.log('Email Submitted!');
    setMailInput('');
  };

  const inputHandlerOnBlur = (e) => {
    if (!mailInput.includes('@')) {
      setIsincludeAt(false);
    }
    if (!mailInput.endsWith('.com')) {
      setIsValidentity(false);
    }
  };

  return (
    <form onSubmit={formHandler}>
      <div className="error">
        <label>Email address</label>
      </div>
      <input
        value={mailInput}
        onChange={inputHandler}
        onBlur={inputHandlerOnBlur}
        placeholder="email@company.com"
      />
      {!isincludeAt && isValidentity && (
        <span className="error-message">your email must has an ' @ '</span>
      )}
      {!isValidentity && isincludeAt && (
        <span className="error-message">
          your email must ends with '
          <span className="bold text-colored"> .com </span>'
        </span>
      )}
      {!isValidentity && !isincludeAt && (
        <span className="error-message">
          your email must has an '{' '}
          <span className="bold text-colored"> @ </span> and ends with
          <span className="bold text-colored"> .com </span> '
        </span>
      )}
      <button
        to={'/success'}
        className="btn"
        type="submit"
      >
        Subscribe to monthly newsteller
      </button>
    </form>
  );
};

export default SubscribeForm;
