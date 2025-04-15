import "./NewsCard.css";
import CardImage from "../../assets/cardImg.svg";
import SaveImage from "../../assets/saveimg.svg";

function NewsCard() {
  return (
    <section className="news">
      <div className="news__content">
        <h2 className="news__title">Search results</h2>
        <li className="card">
          <img src={CardImage} alt="card" className="card__image" />
          <button className="news__card-save-btn">
            <img src={SaveImage} alt="save" className="news__card-save" />
          </button>
          <p className="news__date">November 4, 2020</p>
          <h3 className="card__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <p className="card__description">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="card__signature">TREEHUGGER</p>
        </li>
        <li className="card">
          <img src={CardImage} alt="card" className="card__image" />
          <button className="news__card-save-btn">
            <img src={SaveImage} alt="save" className="news__card-save" />
          </button>
          <p className="news__date">November 4, 2020</p>
          <h3 className="card__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <p className="card__description">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="card__signature">TREEHUGGER</p>
        </li>
        <button type="button" className="button__show-more">
          Show more
        </button>
      </div>
    </section>
  );
}

export default NewsCard;
