import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search__bar">
      <input className="search__input" type="text" placeholder="Enter topic" />
      <button className="search__btn">Search</button>
    </section>
  );
}

export default SearchForm;
