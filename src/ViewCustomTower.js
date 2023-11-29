import { Link } from "react-router-dom";
import "./ViewCustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";

function ViewCustomTower() {
  return (
    <>
      <div className="main-viewcustomtower">
        <div className="viewcustomtower-top-container">
          <button className="btn-back btn-back-viewcustomtower">
            <Link to="/play-custom">BACK</Link>
          </button>
          <h1 className="header-viewcustomtower">View Custom Tower</h1>
          <button className="btn-next btn-next-viewcustomtower">GAME</button>
        </div>
        <div className="main-container">
          <div className="main-top-viewcustomtower">
            <img
              src="./images/search.png"
              height={30}
              alt="search"
              className="search-icon"
            />
            <input className="inputs search-viewcustomtower" type="text" />
          </div>

          <div className="word-container-scroll-viewcustomtower">
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
            <div className="word-container-viewcustomtower">
              <h4 className="words-viewcustomtower">test</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomTower;
