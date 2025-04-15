import "./Header.css";
// import { useContext } from "react";
// // import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import { Link } from "react-router-dom";
// import CurrentUserContext from "../../context/CurrentUserContext";

function Header() {
  return (
    <header className="header">
      <button type="button" className="header__logo">
        NewsExplorer
      </button>
      <div className="header__buttons">
        <p className="home">
          <button type="button" className="header__home">
            Home
          </button>
          <span className="nav__underline"></span>
        </p>
        <button type="button" className="header__login">
          Sign in
        </button>
      </div>
    </header>
  );
}
// function Header() {
//   return (
//     <header className="header">
//       <Link to="/">
//         <button type="button" className="header__logo">
//           NewsExplorer
//         </button>
//       </Link>

//       <ToggleSwitch />
//       {!isLoggedIn && (
//         <>
//           <button type="button" className="header__home">
//             Home
//           </button>
//           <button
//             type="button"
//             onClick={handleLoginClick}
//             className="header__add-clothes-btn"
//           >
//             Log in
//           </button>
//         </>
//       )}
//       {isLoggedIn && (
//         <>
//           <button
//             type="button"
//             onClick={handleAddClick}
//             className="header__saved-articles"
//           >
//             Saved articles
//           </button>
//           <Link to="/profile" className="header__link">
//             <div className="header__user-container">
//               <p className="header__username">{userName}</p>
//             </div>
//           </Link>
//         </>
//       )}
//     </header>
//   );
// }

export default Header;
