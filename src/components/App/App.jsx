import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutAuthor from "../About/About";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
// import Preloader from "../Preloader/Preloader";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
      </div>
      <NewsCard />
      <AboutAuthor />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
