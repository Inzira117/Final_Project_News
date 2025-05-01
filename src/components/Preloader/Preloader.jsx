import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__title">Searching for news...</p>
    </div>
  );

  //  <div className="circle-preloader">Searching for news</div>;
}

export default Preloader;
