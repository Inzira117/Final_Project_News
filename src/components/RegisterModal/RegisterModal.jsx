import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  closeActiveModal,
  activeModal,
  handleLoginClick,
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
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="username"
          name="username"
          placeholder="Enter your username"
        />
      </label>
      <div className="modal__buttons">
        <button type="submit" className="modal__submit">
          Sign up
        </button>
        <button type="button" className="modal__btn" onClick={handleLoginClick}>
          Or Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}
