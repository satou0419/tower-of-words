import "./root.css";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Context } from "./App";
import { useContext } from "react";
export default function Dashboard() {
  const [words, userInfo] = useContext(Context);
  document.body.style.backgroundColor = "#fdffdd";

  const userArchiveWordCount = userInfo.user.userArchive.words.length;

  return (
    <div className="mother-div">
      {/* {words[19].definition} */}
      {/* <PdfGenerator data={userInfo}/> */}
      <div className="card-container">
        <div className="card">
          <Link to="/adventure">
            <div
              className="portrait-container-1"
              onClick={() => {
                console.log(words);
              }}
            >
              <img src="./images/adventure_mode_portrait_v2.png" />
            </div>
            <h2>Adventure</h2>
            <div className="description">
              Step into the Tower of Words as the game designer, crafting
              towers, handpicking words, inviting friends to face personalized
              challenges, spelling your way to victory, and unleashing endless
              entertainment in Custom Towers — create, challenge, and conquer
              with your unique flair!
            </div>
            <div className="counter">
              <span className="counter-desc">Tower Completed</span>
              <span className="the-counter">{userInfo.progress}</span>
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
              Dive into the Tower of Words, where you craft the linguistic show!
              Design your towers, pick words, and invite friends for custom
              wordplay. Unleash creativity, forge your wordy path, and let the
              Tower of Words be your laughter-filled stage. Craft, challenge,
              conquer – a customized wordplay extravaganza awaits!
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
            <span>{userArchiveWordCount}</span> out of{" "}
            <span>{words.length}</span> words
          </div>
        </div>

        <Link to="/archive">
          <button className="btn-go">GO TO ARCHIVE</button>
        </Link>
      </div>
    </div>
  );
}
