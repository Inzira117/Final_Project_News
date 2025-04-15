import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main() {
  return (
    <main>
      <section className="main__content">
        <h1 className="title">What's going on in the world?</h1>
        <p className="description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>
    </main>
  );
}

export default Main;
