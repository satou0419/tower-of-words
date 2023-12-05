import "./root.css";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Context } from "./App";
import { useContext } from 'react';
export default function Dashboard() {
  const [words] = useContext(Context)
  document.body.style.backgroundColor = "#fdffdd";

  

  return (
    <div className="mother-div">
      {/* {words[19].definition} */}
      <div className="card-container">
        <div className="card">
          <Link to="/adventure">
            <div className="portrait-container-1" onClick={() => {console.log(words)}}>
              <img src="./images/adventure_mode_portrait_v2.png" />
            </div>
            <h2>Adventure</h2>
            <div className="description">
              bla bla bla bla sss ssss s sss sss ss ssssss ssssss ss sss sssss
              ss ss
            </div>
            <div className="counter">
              <span className="counter-desc">Tower Completed</span>
              <span className="the-counter">1</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/play-custom">
            <div className="portrait-container-2">
              <img src="./images/custom_mode_portrait.jpg" />
            </div>
            <h2>Custom Towers</h2>
            <div className="description">
              bla bla bla bla sss ssss s sss sss ss ssssss ssssss ss sss sssss
              ss ss
            </div>
            <div className="counter">
              <span className="counter-desc">Towers Created</span>
              <span className="the-counter">1</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="word-collect">
        <div className="span-holder">
          <span className="span-desc">Words Collected</span>
          <div className="span-var">
            <span>0</span> out of <span>20</span> words
          </div>
        </div>

        <button className="btn-go">
          <Link to="/archive">GO TO ARCHIVE</Link>
        </button>
      </div>
    </div>
  );
}
