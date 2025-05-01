import "./Header.css";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logout from "../../assets/logout.svg";

function Header({ handleLoginClick, handleLogout, isLoggedIn, currentUser }) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isSavedPage ? "header--dark" : ""}`}>
      <Link to="/" className={`header__logo ${isSavedPage ? "dark" : ""}`}>
        NewsExplorer
      </Link>

      {/* Desktop Nav */}
      <div className="header__buttons">
        <Link to="/" className={`header__home ${isSavedPage ? "dark" : ""}`}>
          Home
        </Link>
        {isLoggedIn && currentUser && (
          <Link
            to="/saved-news"
            className={`header__home ${isSavedPage ? "dark" : ""}`}
          >
            Saved news
          </Link>
        )}
        {!isLoggedIn && (
          <button
            type="button"
            className={`header__login ${isSavedPage ? "dark" : ""}`}
            onClick={handleLoginClick}
          >
            Sign in
          </button>
        )}
        {isLoggedIn && currentUser && (
          <button
            type="button"
            className={`header__logout-btn ${isSavedPage ? "dark" : ""}`}
            onClick={handleLogout}
          >
            <p className={`header__username ${isSavedPage ? "dark" : ""}`}>
              {currentUser.name}
            </p>
            <img
              src={Logout}
              alt="logout"
              className={`header__logout-img ${isSavedPage ? "dark" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Hamburger Icon */}
      <button
        className={`hamburger ${isSavedPage ? "dark" : ""}`}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`mobile-menu ${isSavedPage ? "dark" : ""}`}>
          <Link to="/" className="header__home" onClick={closeMenu}>
            Home
          </Link>
          {isLoggedIn && currentUser && (
            <Link to="/saved-news" className="header__home" onClick={closeMenu}>
              Saved news
            </Link>
          )}
          {!isLoggedIn && (
            <button
              type="button"
              className="header__login"
              onClick={() => {
                handleLoginClick();
                closeMenu();
              }}
            >
              Sign in
            </button>
          )}
          {isLoggedIn && currentUser && (
            <button
              type="button"
              className="header__logout-btn"
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
            >
              <p className="header__username">{currentUser.name}</p>
              <img src={Logout} alt="logout" className="header__logout-img" />
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
