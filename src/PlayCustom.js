import "./root.css";
import "./PlayCustom.css";
import { Link } from "react-router-dom";

export default function PlayCustom() {
  document.body.style.backgroundColor = "#fdffdd";

  return (
    <>
      <Link to="/home">
        <button className="btn-back">Back</button>
      </Link>
      <section className="custom-wrapper">
        <div className="custom-container">
          <div className="left-custom">
            <h1 className="heading">Custom Tower</h1>
            <button className="btn-enter-tower">Enter Custom Tower</button>
            <button className="btn-create-tower">
              <Link to="/create-custom">Create Custom Tower</Link>{" "}
            </button>
            <button className="btn-view-tower">
              <Link to="/viewtower"> View Custom Tower</Link>
            </button>
          </div>
          <div className="right-custom">
            <img src="./images/custom-banner.png" className="custom-img" />
          </div>
        </div>
      </section>
    </>
  );
}
