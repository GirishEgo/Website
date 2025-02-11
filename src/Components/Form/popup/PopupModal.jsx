import React from "react";

const PopupModal = ({ showPopup, onClose, onCall, loading, message }) => {
  if (!showPopup) return null; // Don't render if showPopup is false

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Thank you for reaching out!</h3>
        <p>{message}</p>
        <div className="popup-buttons">
          <button className="call-btn" onClick={onCall}>
            {loading ? "Calling..." : "Call Us"}
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
