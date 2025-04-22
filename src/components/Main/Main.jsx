import "./Main.css";

import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutAuthor from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main({ handleLoginClick, handleRegisterClick }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <main className="main">
      <div className="main__background">
        <Header
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
        />
        <Navigation
          setArticles={setArticles}
          setLoading={setLoading}
          setError={setError}
          setHasSearched={setHasSearched}
        />
      </div>

      {loading && <Preloader />}
      {error && <p className="search__error">{error}</p>}
      {!loading && articles.length > 0 && (
        <section className="news">
          <div className="news__content">
            <h2 className="news__title">Search results</h2>
            <ul className="cards">
              {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </ul>
          </div>
        </section>
      )}
      {!loading && hasSearched && articles.length === 0 && !error && (
        <p style={{ textAlign: "center" }}>No results found.</p>
      )}

      <AboutAuthor />
    </main>
  );
}

export default Main;
