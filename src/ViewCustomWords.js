import { Link } from "react-router-dom";
import "./ViewCustomWords.css";
import "./root.css";
import "@fontsource/lilita-one";

function ViewCustomWords() {
  return (
    <>
      <div className="main-viewcustomwords">
        <div className="viewcustomwords-top-container">
          <button className="btn-back btn-back-viewcustomwords">
            <Link to="/added-custom-tower">BACK</Link>
          </button>
          <h1 className="header-viewcustomwords">Words Added</h1>
        </div>
        <div className="main-container">
          <div className="word-container-scroll-viewcustomwords">
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
            <div className="word-container-viewcustomwords">
              <h4 className="words-viewcustomwords">test</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomWords;
