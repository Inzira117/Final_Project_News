import "./Footer.css";
import Git from "../../assets/github.svg";
import Facebook from "../../assets/facebook.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <div className="links__group-one">
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="footer__home"
          >
            Home
          </NavLink>

          <Link
            to="https://tripleten.com/"
            className="footer__tt"
            rel="noopener noreferrer"
            target="_blank"
          >
            TripleTen
          </Link>
        </div>
        <div className="links__group-two">
          <Link
            to="https://github.com/Inzira117"
            className="footer__git"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Git} alt="GitHub" className="footer_git" />
          </Link>
          <Link
            to="https://www.facebook.com/tripleten.tech/"
            className="footer__fcbk"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook" className="footer_fcbk" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
