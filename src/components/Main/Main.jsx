import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import AboutAuthor from "../About/About";

function Main({ handleLoginClick, handleRegisterClick }) {
  return (
    <main className="main">
      <div className="main__background">
        <Header
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
        />
        <Navigation />
      </div>
      <NewsCard />
      <AboutAuthor />
    </main>
  );
}

export default Main;
