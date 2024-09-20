import React from 'react';
import { Card } from 'react-bootstrap';
import './Screens.css';

export default function NameScreen({ nameTitle, setNameInput,}) {
    const handleNameChange = (e) => {
        const name = e.target.value;
        setNameInput(name); 
    };

    return (
        <div>
            <Card className="main-box">
                <Card.Body className="box-content">
                    {/* Left content  title and description input */}
                    <div className="left-content">
                        <div className="text-box title-box">{nameTitle}</div>
                        
                        <input 
                            type="text"
                            onChange={handleNameChange} 
                            className="name-input" 
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
