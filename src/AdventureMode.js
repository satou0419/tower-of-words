import { Link } from "react-router-dom";
import "./AdventureMode.css";
import { useState } from "react";

export default function AdventureMode() {
  const [towerids, setTowerIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  return (
    <>
      <Link to="/home">
        <button className="btn-back">Back</button>
      </Link>

      <section className="adventure-container">
        <div className="container-tower-details">
          <Link to="/adventure/1" className="tower-details">
            <span>Tower 1</span>
            <img src="./images/tower.png" className="img-tower" />
          </Link>

          <Link to="/adventure/2" className="tower-details">
          <div className="tower-details">
            <span>Tower 2</span>
            <img src="./images/tower.png" className="img-tower" />
          </div>
          </Link>

          <div className="tower-details">
            <span>Tower 3</span>
            <img src="./images/tower.png" className="img-tower" />
          </div>
        </div>

        <div className="tower-progress">
          <h1>
            <span className="completed">0 </span> OUT OF{" "}
            <span className="total">10</span> TOWERS COMPLETED
          </h1>
        </div>
      </section>
    </>
  );
}
