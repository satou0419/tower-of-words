import { Link } from "react-router-dom";
import "./AdventureMode.css";

export default function AdventureMode() {
  return (
    <>
      <Link to="/home">
        <button className="btn-back">Back</button>
      </Link>

      <section className="adventure-container">
        <div className="container-tower-details">
          <Link to="/game-tower1" className="tower-details">
            <span>Tower 1</span>
            <img src="./images/tower.png" className="img-tower" />
          </Link>

          <div className="tower-details">
            <span>Tower 2</span>
            <img src="./images/tower.png" className="img-tower" />
          </div>

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
