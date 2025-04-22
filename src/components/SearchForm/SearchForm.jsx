import "./SearchForm.css";
import React, { useState } from "react";
import getNews from "../../utils/api";

function SearchForm({ setArticles, setLoading, setError, setHasSearched }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    setLoading(true);
    setHasSearched(true);

    try {
      const results = await getNews(searchText);
      setArticles(results);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="search__bar">
      <form onSubmit={handleSubmit}>
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
      </form>
    </section>
  );
}

export default SearchForm;
