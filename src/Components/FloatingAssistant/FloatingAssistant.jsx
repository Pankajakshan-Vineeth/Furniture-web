import React, { useState } from 'react';
import './FloatingAssistant.css'; 
import technicalSupport from '../../assets/technical-support.png'

const FloatingAssistant = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-assistant">
      <div className="assistant-button" onClick={() => setOpen(!open)}>
        <img src = {technicalSupport}/>
      </div>

      {open && (
        <div className="assistant-panel">
          <h4>Hello! Need help?</h4>
          <p>This is your assistant. Add anything you want here.</p>
        </div>
      )}
    </div>
  );
};

export default FloatingAssistant;
