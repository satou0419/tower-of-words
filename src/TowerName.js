import "./TowerName.css";
import "./root.css";
import "@fontsource/lilita-one";

function TowerName() {
  return <>
        <div className="main-towername">
            <div className="towername-top-container">
                <button className="btn-back btn-back-towername">BACK</button>
                <h1 className="header-towername">
                Tower Name
                </h1>
                <button className="btn-next btn-next-towername">BACK</button>
            </div>
            <div className="main-container">
              Input Tower Name
              <input type="text"></input>
            </div>
        </div>
  </>
}

export default TowerName;