import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <div className="page__main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleRegisterClick={handleRegisterClick}
                  handleLoginClick={handleLoginClick}
                  articles={articles}
                  setArticles={setArticles}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  handleRegisterClick={handleRegisterClick}
                  handleLoginClick={handleLoginClick}
                />
              }
            />
          </Routes>
        </div>

        <LoginModal
          activeModal={activeModal === "login"}
          closeActiveModal={closeActiveModal}
          handleRegisterClick={handleRegisterClick}
        />
        <RegisterModal
          activeModal={activeModal === "register"}
          closeActiveModal={closeActiveModal}
          handleLoginClick={handleLoginClick}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
