import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalDuration = 500;
    const steps = 100 / (totalDuration / 10);

    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setWidth((prevWidth) => prevWidth + steps);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [width, navigate]);

  return (
    <div className="loading-container">
      <div className="splash-top">
        <img src="./images/logo.png" className="top-logo" />
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${width}%` }}>
            <div className="logo-container" style={{ left: `${width + 0}%` }}>
              <img src="./images/sad robot.png" alt="Sad Robot" />
            </div>
          </div>
          <h1>LOADING...</h1>
        </div>
      </div>

      <div className="splash-down">
        <img src="./images/loading-screen.png" alt="Loading Screen" />
      </div>
    </div>
  );
};

export default Loading;
