import "./About.css";
import Avatar from "../../assets/AuthorAvatar.svg";

function AboutAuthor() {
  return (
    <section className="about__author">
      <img src={Avatar} alt="avatar" className="about__avatar" />
      <div className="about__content">
        <h1 className="about__title">About the author</h1>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default AboutAuthor;
