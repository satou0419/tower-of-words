import { Link } from "react-router-dom";
import "./WordsAdded.css";
import "./root.css";
import "@fontsource/lilita-one";

function WordsAdded() {
  return (
    <>
      <div className="main-wordsadded">
        <div className="wordsadded-top-container">
          <button className="btn-back btn-back-wordsadded">
            <Link to="/added-custom-tower">BACK</Link>
          </button>
          <h1 className="header-wordsadded">Words Added</h1>
          <button className="btn-next btn-next-wordsadded">
            <Link to="/generate-code">GAME</Link>
          </button>
        </div>
        <div className="main-container">
          <div className="main-top-wordsadded">
            <button className="btn-back btn-remove-wordsadded">REMOVE</button>
          </div>

          <div className="word-container-scroll-wordsadded">
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
            <div className="word-container-wordsadded">
              <h4 className="words-wordsadded">test</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordsAdded;
