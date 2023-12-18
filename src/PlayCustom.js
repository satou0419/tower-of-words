import "./root.css";
import "./PlayCustom.css";
import { Link } from "react-router-dom";

export default function PlayCustom() {
  document.body.style.backgroundColor = "#fdffdd";

  return (
    <>
      <div className="main-custom">
        <div className="custom-top-container">
          <Link to="/home">
            <button className="btn-back">Back</button>
          </Link>
        </div>
        
        <section className="custom-wrapper">
          <div className="custom-container">
            <div className="left-custom">
              <h1 className="heading">Custom Tower</h1>
              <Link to="/enter-code">
                <button className="btn-enter-tower">
                  Enter Custom Tower
                </button>
              </Link>
              <Link to="/create-custom">
                <button className="btn-create-tower">
                  Create Custom Tower
                </button>
              </Link>
              <Link to="/viewtower">
                <button className="btn-view-tower">
                  View Custom Tower
                </button>
              </Link>
            </div>
            <div className="right-custom">
              <img src="./images/custom-banner.png" className="custom-img" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
