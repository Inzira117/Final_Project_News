import "./About.css";
import Avatar from "../../assets/AboutAuthor.png";

function AboutAuthor() {
  return (
    <section className="about">
      <div className="about__avatar">
        <img src={Avatar} alt="avatar" className="about__image" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Inzira A. I am the developer behind this news search
          project. This application was built using React.js for the frontend,
          along with modern JavaScript (ES6+) features like async/await for
          handling asynchronous operations. I implemented functional components
          and React Hooks (useState, useEffect) to manage state and side effects
          efficiently.
        </p>
        <p className="about__text">
          For API interactions, I created a custom utility that fetches news
          articles based on user input. The project also features dynamic UI
          behavior like loading spinners, error handling, and conditional
          rendering to create a smooth user experience. This project showcases
          my skills in frontend development, particularly in React,
          component-based architecture, state management, API integration, and
          UI/UX design.
        </p>
      </div>
    </section>
  );
}

export default AboutAuthor;
