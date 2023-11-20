import "./CustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";

function CustomTower() {
  return (
    <>
      <div className="main-customtower">
        <div className="customtower-top-container">
          <button className="btn-back btn-back-customtower">BACK</button>
          <h1 className="header-customtower">Create Custom Tower</h1>
          <button className="btn-next btn-next-customtower">NEXT</button>
        </div>
        <div className="main-container">
          <div className="main-top-customtower">
            <img
              src="./images/search.png"
              height={30}
              alt="search"
              className="search-icon"
            />
            <input className="inputs search-customtower" type="text" />
            <button className="btn-next btn-next-customtower">ADD</button>
          </div>

          <div className="word-container-scroll-customtower">
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
            <div className="word-container-customtower">
              <h4 className="words-customtower">test</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomTower;
