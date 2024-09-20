import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import DynamicSidebar from '../Components/DynamicSideBar';
import EmailScreen from './EmailScreen';
import NameScreen from './NameScreen';


export default function EditorScreen() {
  const [title, setTitle] = useState('Welcome To Our Form...');
  const [description, setDescription] = useState('This is a Description of the Form');
  const [emaildescription, setEmailDescription] = useState('This will be used to contact you for the next steps');
  const [emailtitle, setemailtitle] = useState(' Enter Your Email');
  const [email, setEmail] = useState('');
  const [nameTitle, setnameTitle] = useState('Enter your Name');
  const [NameInput,setNameInput ] = useState('');
  const [buttonText, setButtonText] = useState('Start');
  const [image, setImage] = useState(null);
  const [showEmailScreen, setShowEmailScreen] = useState(false);
  const [showNameScreen, setShowNameScreen] = useState(false); 
  

  return (
    <div style={{ display: 'flex' }}>
      <DynamicSidebar
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        buttonText={buttonText}
        setButtonText={setButtonText}
        image={image}
        setImage={setImage}
        setShowEmailScreen={setShowEmailScreen}
        emailtitle={emailtitle}
        setemailtitle={setemailtitle}
        emaildescription={emaildescription}
        setEmailDescription={setEmailDescription}
        setShowNameScreen={setShowNameScreen} 
        nameTitle = {nameTitle }
        setnameTitle = {setnameTitle}
      />

      <WelcomeScreen
        title={title}
        description={description}
        buttonText={buttonText}
        image={image}
      />

      {showEmailScreen && (
        <EmailScreen
          emailtitle={emailtitle}
          emaildescription={emaildescription}
          setemailtitle={setemailtitle}
          setEmailDescription={setEmailDescription}
          setShowEmailScreen={setShowEmailScreen}
          setEmail={setEmail}
        />
      )}
      {showNameScreen && (
        <NameScreen
          nameTitle={nameTitle}
          setsetnameTitle={setnameTitle}
          setShowNameScreen={setShowNameScreen}
          setNameInput = { setNameInput} 
        />
      )}

    </div>
  );
}
