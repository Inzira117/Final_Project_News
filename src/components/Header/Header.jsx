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
    <header className={`header ${isSavedPage ? "header_dark" : ""}`}>
      <div className="header__content">
        <Link
          to="/"
          className={`header__logo ${isSavedPage ? "header__logo_dark" : ""}`}
        >
          NewsExplorer
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            <li>
              <Link
                to="/"
                className={`header__home ${
                  isSavedPage ? "header__home_dark" : ""
                }`}
              >
                Home
              </Link>
            </li>
            {isLoggedIn && currentUser && (
              <li>
                <Link
                  to="/saved-news"
                  className={`header__home ${
                    isSavedPage ? "header__home_dark" : ""
                  }`}
                >
                  Saved news
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <button
                  type="button"
                  className={`header__login ${
                    isSavedPage ? "header__login_dark" : ""
                  }`}
                  onClick={handleLoginClick}
                >
                  Sign in
                </button>
              </li>
            )}
            {isLoggedIn && currentUser && (
              <li>
                <button
                  type="button"
                  className={`header__logout-btn ${
                    isSavedPage ? "header__logout-btn_dark" : ""
                  }`}
                  onClick={handleLogout}
                >
                  <p
                    className={`header__username ${
                      isSavedPage ? "header__username_dark" : ""
                    }`}
                  >
                    {currentUser.name}
                  </p>
                  <img
                    src={Logout}
                    alt="logout"
                    className={`header__logout-img ${
                      isSavedPage ? "header__logout-img_dark" : ""
                    }`}
                  />
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="header__hamburger"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span
            className={`header__hamburger-line ${
              isSavedPage ? "header__hamburger-line_dark" : ""
            }`}
          ></span>
          <span
            className={`header__hamburger-line ${
              isSavedPage ? "header__hamburger-line_dark" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="header__overlay">
            <div
              className={`header__mobile-menu ${
                isSavedPage ? "header__mobile-menu_dark" : ""
              }`}
            >
              <div className="header__mobile-top">
                <Link
                  to="/"
                  className={`header__logo ${
                    isSavedPage ? "header__logo_dark" : ""
                  }`}
                  onClick={closeMenu}
                >
                  NewsExplorer
                </Link>
                <button
                  className="header__close-button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  ✕
                </button>
              </div>
              <Link to="/" className="header__home" onClick={closeMenu}>
                Home
              </Link>
              {isLoggedIn && currentUser && (
                <Link
                  to="/saved-news"
                  className="header__home"
                  onClick={closeMenu}
                >
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
                  <img
                    src={Logout}
                    alt="logout"
                    className="header__logout-img"
                  />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
