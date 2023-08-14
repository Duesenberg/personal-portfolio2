import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can add code to handle the form submission
    // For example, sending the form data to a server or an API
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className='headerText'>Contact</h2>
      <form 
        className='inputForm'
        onSubmit={handleSubmit}>
        <div className='inputField'>
          <label className='inputLabel' htmlFor="fullName">Full Name:</label>
          <input
            className='inputFieldText'
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className='inputField'>
          <label className='inputLabel' htmlFor="email">Email Address:</label>
          <input
            className='inputFieldText'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='inputField'>
          <label className='inputLabel' htmlFor="message">Message:</label>
          <textarea
            className='inputFieldText resize-none'
            id="message"
            value={message}
            onChange={handleMessageChange}
            rows={10}
            required
          />
        </div>
        <button className='button w-max self-center' type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
