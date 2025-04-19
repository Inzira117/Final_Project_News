import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  closeActiveModal,
  activeModal,
  handleRegisterClick,
}) {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondButtonText="or Sign up"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          placeholder="Enter password"
          minLength="8"
        />
      </label>
      <div className="modal__buttons">
        <button type="submit" className="modal__submit">
          Sign in
        </button>
        <button
          type="button"
          className="modal__btn"
          onClick={handleRegisterClick}
        >
          Or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}
