import React from "react";
import "./SuccessPopup.css";
import Close from "../../assets/close.svg";

export default function SuccessPopup({ onClose, closeActiveModal }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="modal__close"
          type="button"
          onClick={closeActiveModal}
        >
          <img src={Close} alt="close button" />
        </button>
        <p className="popup__message">Registration successfully completed!</p>
        <button className="popup__sign-in" onClick={onClose}>
          Sign in
        </button>
      </div>
    </div>
  );
}
