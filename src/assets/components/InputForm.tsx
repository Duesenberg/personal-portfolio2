import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const[messageSent, setMessageSent] = useState(false);
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
    setFullName('');
    setEmail('');
    setMessage('');
    setMessageSent(true);
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
        <span className={'text-lg text-green-600 self-center ' + (messageSent ? 'visible' : 'invisible')}>Sent &#x2713;</span>
      </form>
    </div>
  );
};

export default ContactForm;
