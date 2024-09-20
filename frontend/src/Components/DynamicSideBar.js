import React, { useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import './DynamicSideBar.css';

export default function DynamicSidebar({ 
  title, 
  setTitle, 
  description, 
  setDescription,
  emailtitle,
  setemailtitle, 
  emaildescription,
  setEmailDescription,
  buttonText, 
  setButtonText, 
  image, 
  setImage, 
  setShowEmailScreen,
  nameTitle,
  setnameTitle, 
  setShowNameScreen 

}) {
  const [currentSidebar, setCurrentSidebar] = useState('main');
  const [isImageOnTop, setIsImageOnTop] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleEmailButtonClick = () => {
    setCurrentSidebar('email');
    setShowEmailScreen(true);
  };
  const handleNameButtonClick = () => {
    setCurrentSidebar('name');
    setShowNameScreen(true); 
  };
  
  const swapPosition = () => {
    setIsImageOnTop(!isImageOnTop);
  };

  return (
    <div className="sidebar">
      {currentSidebar === 'main' && (
        <div>
          <Button className="sidebar-button" onClick={() => setCurrentSidebar('welcome')}>Welcome Screen</Button>
          <Button className="sidebar-button" onClick={handleNameButtonClick}>Enter Your Name</Button>
          <Button className="sidebar-button" onClick={handleEmailButtonClick}>Enter Your Email</Button>
          <Button className="add-button" onClick={handleOpenModal}>Add Field</Button>
        </div>
      )}

      {/* Modal for Add Field Options */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Field Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Multiple Choice</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Short Text</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Email</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">DropDown</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Phone Number</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Section</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Contact Information</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Legal</Button>
            </Col>
            <Col xs={6}>
              <Button variant="outline-primary" className="option-button">Country</Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Welcome Screen sidebar */}
      {currentSidebar === 'welcome' && (
        <div className="welcome-sidebar">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Button Text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            {image && (
              <div className="image-preview">
                {isImageOnTop ? (
                  <>
                    <img src={image} alt="Preview" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                    <Button className='remove-button' variant="danger" onClick={removeImage}>Remove</Button>
                  </>
                ) : (
                  <>
                    <Button className='remove-button' variant="danger" onClick={removeImage}>Remove</Button>
                    <img src={image} alt="Preview" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                  </>
                )}
              </div>
            )}
            <div className="swap-icons">
              <FontAwesomeIcon icon={faRightLeft} onClick={swapPosition} style={{ cursor: 'pointer', marginRight: '10px' }} />
            </div>
          </Form>
          <Button className="back-button" onClick={() => setCurrentSidebar('main')}>Back</Button>
        </div>
      )}

      {/* Email input sidebar */}
      {currentSidebar === 'email' && (
        <div className="email-sidebar">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              value={emailtitle}
              onChange={(e) => setemailtitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={emaildescription}
              onChange={(e) => setEmailDescription(e.target.value)}
            />
          </Form.Group>

          <Button 
            className="back-button" 
            onClick={() => { 
              setShowEmailScreen(false);
              setCurrentSidebar('main'); 
            }}
          >
            Back
          </Button>
        </div>
      )}
       {/* Name input sidebar */}

        {currentSidebar === 'name' && (
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Your Name" 
              value={nameTitle}  
              onChange={(e) =>setnameTitle(e.target.value)} 
            />
          </Form.Group>

          <Button 
            className="back-button" 
            onClick={() => { 
              setShowNameScreen(false); 
              setCurrentSidebar('main'); 
            }}
          >
          
            Back
          </Button>
        </div>
      )}
    </div>
  );
}
