import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

function Main(onClick) {
  return (
    <main className="main">
      <div className="main__background">
        <Header />
        <Navigation onClick={onClick} />
      </div>
    </main>
  );
}

export default Main;
