import "./SavedNews.css";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews({
  handleLoginClick,
  handleRegisterClick,
  handleLogout,
  isLoggedIn,
  currentUser,
  savedArticles = [],
  handleDeleteArticle,
}) {
  const keywords = [
    ...new Set(
      savedArticles
        .map((a) => a?.keyword)
        .filter((k) => typeof k === "string" && k.trim() !== "")
    ),
  ];

  const formattedKeywords = () => {
    if (keywords.length === 0) return null;
    if (keywords.length <= 2) return keywords.join(", ");
    const firstTwo = keywords.slice(0, 2).join(", ");
    const othersCount = keywords.length - 2;
    return `${firstTwo}, and ${othersCount} other${othersCount > 1 ? "s" : ""}`;
  };

  console.log(">> Saved Artticles:", savedArticles);
  return (
    <section className="saved__news">
      <Header
        handleLoginClick={handleLoginClick}
        handleRegisterClick={handleRegisterClick}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <div className="news__content">
        <p className="saved__articles">Saved articles</p>
        <h1 className="news__title">
          {currentUser
            ? `${currentUser.name}, you have ${savedArticles.length} saved ${
                savedArticles.length === 1 ? "article" : "articles"
              }`
            : "You have 0 saved articles"}
        </h1>
        {keywords.length > 0 && (
          <p className="news__keyword">By keywords: {formattedKeywords()}</p>
        )}
      </div>

      <div className="saved-news__cards">
        {savedArticles.length > 0 ? (
          savedArticles.map((article) => (
            <NewsCard
              key={article.url || index}
              article={article}
              keyword={article.keyword || ""}
              isSavedNewsPage={true}
              handleDeleteArticle={handleDeleteArticle}
            />
          ))
        ) : (
          <p className="no__articles">No saved articles yet.</p>
        )}
      </div>
    </section>
  );
}
