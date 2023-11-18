import "./AdventureMode.css";

export default function AdventureMode() {
  return (
    <>
      <button className="btn-back">Back</button>

      <section className="adventure-container">
        <div className="container-tower-details">
          <div className="tower-details">
            <span>Tower 1</span>
            <img src="./images/tower.png" className="img-tower" />
          </div>

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
