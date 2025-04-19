import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutAuthor from "../About/About";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
// import Preloader from "../Preloader/Preloader";

function App() {
  const [activeModal, setActiveModal] = useState("");

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
          {/* <Header
            handleLoginClick={handleLoginClick}
            handleRegisterClick={handleRegisterClick}
          /> */}
          <Routes>
            <Route path="/" element={<Main onClick={handleLoginClick} />} />
            <Route path="/saved-news" element={<SavedNews />} />
          </Routes>
        </div>
        <NewsCard />
        <AboutAuthor />
        <Footer />
        {/* <Preloader /> */}
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
      </div>
    </div>
  );
}

export default App;
