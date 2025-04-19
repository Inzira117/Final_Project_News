import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews() {
  return (
    <section className="saved__news">
      <Header />
      <div className="news__content">
        <p className="saved__articles">Saved articles</p>
        <h1 className="news__title">Elise, you have 5 saved articles</h1>
        <p className="news__keyword">By keywords: Nature</p>
      </div>
      <NewsCard />
    </section>
  );
}
