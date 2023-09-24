import React from 'react';
import Success from "../assets/confirm.png";

// src/components/SuccessPopup.js


function SuccessPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose} style={{background:"red",color:"white",}} >
            X
        </button>
        <img src={Success} alt="Success"  />
      </div>
    </div>
  );
}

export default SuccessPopup;
