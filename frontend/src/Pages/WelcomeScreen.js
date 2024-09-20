import React from 'react';
import { Card } from 'react-bootstrap';
import './Screens.css';

export default function WelcomeScreen({ title, description, buttonText, image, isImageOnTop }) {
  
  return (
    <div>
      <Card className="main-box">
        <Card.Body className="box-content">
         
          {isImageOnTop && image && (
            <div className="top-content">
              <img src={image} alt="Uploaded" className="uploaded-image" />
            </div>
          )}
          
          {/* Left content  title, description, and button */}
          <div className={`left-content ${image ? 'with-image' : ''}`}>
            <div className="text-box title-box">{title}</div>
            <div className="text-box description-box">{description}</div>
            <button className="start-button">{buttonText}</button>
          </div>

        
          {!isImageOnTop && image && (
            <div className="right-content">
              <img src={image} alt="Uploaded" className="uploaded-image" />
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
