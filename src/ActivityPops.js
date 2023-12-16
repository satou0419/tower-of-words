import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import "./root.css";
import "@fontsource/lilita-one";

function TowerCompletePop() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/adventure");
  };

  return (
    <div className="logout-overlay">
      <div className="logout-pane">
        <div className="details">
          <h1>Tower Cleared</h1>

          {/* <img
            src="./images/sad robot.png"
            className="logout-icon"
            alt="Sad Robot"
          /> */}
        </div>

        <div className="btns">
          {/* <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button> */}
          <button className="btn-logout" onClick={handleReturn}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

function TowerFailedPop() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/adventure");
  };

  return (
    <div className="logout-overlay">
      <div className="logout-pane">
        <div className="details">
          <h1>You Lost</h1>
          <h3>Try again next time</h3>

          {/* <img
            src="./images/sad robot.png"
            className="logout-icon"
            alt="Sad Robot"
          /> */}
        </div>

        <div className="btns">
          {/* <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button> */}
          <button className="btn-logout" onClick={handleReturn}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}


export{TowerCompletePop, TowerFailedPop};