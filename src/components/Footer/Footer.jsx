import "./Footer.css";
import Git from "../../assets/github.svg";
import Facebook from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <button className="footer__home">Home</button>
        <button className="footer_tt">TripleTen</button>
        <img src={Git} alt="GitHub" className="footer_git" />
        <img src={Facebook} alt="Facebook" className="footer_fcbk" />
      </div>
    </footer>
  );
}

export default Footer;
