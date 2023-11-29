//TowerName
import { Link } from "react-router-dom";
import "./TowerName.css";
import "./root.css";
import "@fontsource/lilita-one";

function TowerName() {
  return (
    <>
      <div className="main-towername">
        <div className="towername-top-container">
          <button className="btn-back btn-back-towername">
            <Link to="/play-custom">BACK</Link>
          </button>
          <h1 className="header-towername">Tower Name</h1>
          <button className="btn-next btn-next-towername">
            <Link to="/added-custom-tower">NEXT</Link>
          </button>
        </div>
        <div className="tower-main-container">
          <h1 className="container-title">Input Tower Name</h1>
          <input className="inputs inputs-information" type="text"></input>
        </div>
      </div>
    </>
  );
}

export default TowerName;
