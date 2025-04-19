import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import AboutAuthor from "../About/About";
import Footer from "../Footer/Footer";

function Main(onClick) {
  return (
    <main className="main">
      <div className="main__background">
        <Header />
        <Navigation onClick={onClick} />
      </div>
      <NewsCard />
      <AboutAuthor />
    </main>
  );
}

export default Main;
