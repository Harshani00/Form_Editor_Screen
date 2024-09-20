import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import './Screens.css'; 

export default function EmailScreen({ emaildescription, emailtitle, setEmail, setemailtitle }) {
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);

   
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <Card className="main-box">
        <Card.Body className="box-content">
          {/* Left content  title and description input */}
          <div className="left-content">
            <div className="text-box title-box">{emailtitle}</div>
            <div className="text-box description-box">{emaildescription}</div>
            
          
            <input 
              type="email"
              placeholder="Enter Your Email"
              onChange={handleEmailChange} 
              className="email-input" 
            />
            {/* Show error message if email is invalid */}
            {emailError && <Alert variant="danger">{emailError}</Alert>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
