import React from "react";
import "./Logout.css";
import "./root.css";
import "@fontsource/lilita-one";

export default function Logout({ onClose }) {
  return (
    <div className="logout-overlay">
      <div className="logout-pane">
        <div className="details">
          <h1>Logout Account?</h1>

          <img
            src="./images/sad robot.png"
            className="logout-icon"
            alt="Sad Robot"
          />
        </div>

        <div className="btns">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-logout">Logout</button>
        </div>
      </div>
    </div>
  );
}
