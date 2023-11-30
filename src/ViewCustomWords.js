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
  const words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "watermelon",
    "carrot",
    "broccoli",
    "potato",
    "tomato",
    "cucumber",
    "table",
    "chair",
    "lamp",
    "book",
    "clock",
  ];

  return (
    <>
      <div className="main-viewcustomwords">
        <div className="viewcustomwords-top-container">
          <button className="btn-back btn-back-viewcustomwords">BACK</button>
        </div>
        <div className="main-container-viewcustomwords">
          <div className="main-border-view">
            <div className="word-container-scroll-viewcustomwords">
              {words.map((name, index) => (
                <div
                  key={index}
                  className={`word-container-viewcustomwords 
                            }`}
                >
                  <h4 className="words-viewcustomwords">{name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomWords;
