import "./Main.css";

import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutAuthor from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../../assets/Not-found.svg";

function Main({
  handleLoginClick,
  handleRegisterClick,
  articles,
  setArticles,
  handleLogout,
  isLoggedIn,
  currentUser,
  handleSaveArticle,
  handleDeleteArticle,
}) {
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [newsError, setNewsError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchText, setSearchText] = useState("");

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <main className="main">
      <div className="main__background">
        <Header
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />
        <Navigation
          setArticles={setArticles}
          articles={articles}
          setLoading={setLoading}
          setSearchError={setSearchError}
          setHasSearched={setHasSearched}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>

      {searchError && <p className="search__error">{searchError}</p>}
      {newsError && <p className="search__error">{newsError}</p>}
      {loading && (
        <p className="search__error">
          <Preloader />
        </p>
      )}
      {!loading && articles.length > 0 && (
        <section className="news">
          <div className="news__content">
            <h2 className="news__title">Search results</h2>
            <ul className="cards">
              {visibleArticles.map((article, index) => (
                <NewsCard
                  key={index}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  handleSaveArticle={handleSaveArticle}
                  keyword={searchText}
                  handleDeleteArticle={handleDeleteArticle}
                />
              ))}
            </ul>
            {visibleCount < articles.length && (
              <button onClick={handleShowMore} className="button__show-more">
                Show more
              </button>
            )}
          </div>
        </section>
      )}

      {!loading &&
        hasSearched &&
        articles.length === 0 &&
        !searchError &&
        !newsError && (
          <div className="results__not-found">
            <div className="results__container">
              <img src={NotFound} alt="not found" className="results__img" />
              <p className="results__title">Nothing found.</p>
              <p className="results__description">
                Sorry, but nothing matched your search terms
              </p>
            </div>
          </div>
        )}

      {!loading && hasSearched && (searchError || newsError) && (
        <div className="error">
          <p className="error__title">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </div>
      )}

      <AboutAuthor />
    </main>
  );
}

export default Main;
