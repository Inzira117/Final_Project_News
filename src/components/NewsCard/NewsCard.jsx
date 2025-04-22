import "./NewsCard.css";
import SaveImage from "../../assets/saveimg.svg";

function NewsCard({ article }) {
  if (!article) return null;
  const { title, description, publishedAt, urlToImage, source } = article;

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img
          src={urlToImage || "https://via.placeholder.com/150"}
          alt={title}
          className="card__image"
        />
        <button className="news__card-save-btn">
          <img src={SaveImage} alt="save" className="news__card-save" />
        </button>
      </div>
      <div className="card__content">
        <p className="news__date">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__signature">{source?.name || "Unknown source"}</p>
      </div>
    </li>
  );
}

export default NewsCard;
