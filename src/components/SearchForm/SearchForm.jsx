import "./SearchForm.css";
import React, { useState } from "react";
import { getNews } from "../../utils/api";

function SearchForm({
  setArticles,
  setLoading,
  setSearchError,
  setHasSearched,
  searchText,
  setSearchText,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      setSearchError("Please enter a keyword");
      return;
    }

    setSearchError("");
    setLoading(true);
    setHasSearched(true);

    try {
      const results = await getNews(searchText);
      setArticles(results);
    } catch (err) {
      console.error("Error fetching news:", err);
      setSearchError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search__bar" onSubmit={handleSubmit}>
      <div className="search__bar-container">
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
